import React, { Component } from 'react';
import logo from './logo.svg';
import VehiclesList from './components/VehiclesList';
import FilterContainer from './components/FilterContainer';

import debounce from './utils/debounce';

import './App.css';

class App extends Component {
  state = {
    vehicles: null,
    isLoading: true,
    options: {
      location: "London, UK",
      max_distance: 50,
      number_of_months: 12,
      number_of_weeks: 52,
      order_by: 'price',
      order_direction: 'asc',
      page: 1,
      per_page: 15,
      price_max: 2500,
      price_min :100,
      rolling: false,
      start_date: '09/09/2018',
      vehicle_type:'Consumer',
    }
  }

  componentDidMount() {
    document.title = 'Drover Search';
    this.fetchVehicleData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.options) !== JSON.stringify(this.state.options)) {
      this.debouncedFetch();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  fetchVehicleData = () => {
    const { options } = this.state;
    const url = 'https://app.joindrover.com/api/web/vehicles';
    const data = options;

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error('Response was not OK', res);
    }).then((json) => {
      this.setState({
        vehicles: json,
        isLoading: false
      });
    }).catch((err) => {
      console.error('Error in fetch :(', err);
      this.setState({isLoading: false});
    })
  }

  debouncedFetch = debounce(this.fetchVehicleData, 800);

  handleOnChange = (name, value) => {
    let options = {...this.state.options};
    if (name === 'year' && value === 0) {
      delete options[name];
      options['page'] = 1;
    } else if (name === 'page') {
      options[name] = value;
    } else {
      options[name] = value;
      options['page'] = 1;
    }
    this.setState({options});
  }

  handleClickClose = (name) => {
    let options = {...this.state.options};
    if (name === 'year') {
      delete options[name];
      options['page'] = 1;
    } else {
      options[name] = '';
    }
    this.setState({options});
  }

  render() {
    const { vehicles, options, isLoading } = this.state;
    const priceHashIndex = Math.floor(options.number_of_weeks/options.number_of_months);

    let mainList;
    if (isLoading) {
      mainList = (
        <VehiclesList
          vehicles={null}
          priceHashIndex={null}
        />
      );
    } else {
      if (vehicles && vehicles.data.length) {
        mainList = (
          <VehiclesList
            vehicles={vehicles}
            priceHashIndex={priceHashIndex}
            onHandleClickPageLink={this.handleOnChange}
          />
        )
      } else {
        mainList = (
          <div className="col-12 col-lg-9">
            <div className="d-flex mb-2 justify-content-center align-items-end">
              <h4>Sorry we couldn't find any cars, please try your search again.</h4>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img alt="logo" src={logo} />
          </div>
        </header>

        <section>
          <div className="py-3 container">
            <div className="row">

              <FilterContainer
                options={options}
                onHandleOnChange={this.handleOnChange}
                onHandleClickClose={this.handleClickClose}
              />
              
              { mainList }
              
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;

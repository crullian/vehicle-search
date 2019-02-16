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
      location: "London, Uk",
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
      vehicle_type:'Consumer'
    }
  }

  componentDidMount() {
    document.title = 'Drover Search';
    this.fetchVehicleData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState.options) !== JSON.stringify(this.state.options)) {
      this.debouncedFetch();
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

  handleOnChange = (event) => {
    let options = {...this.state.options};
    options[event.target.name] = event.target.value;
    this.setState({options});
  }

  handleClickClose = () => {
    let options = {...this.state.options};
    options['location'] = '';
    this.setState({options});
  }

  render() {
    const { vehicles, options } = this.state;
    console.log('STATE', this.state)
    const priceHashIndex = Math.floor(options.number_of_weeks/options.number_of_months);

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
                onHandleOnChange={this.handleOnChange}
                options={options}
                onHandleClickClose={this.handleClickClose}
              />
              
              <VehiclesList vehicles={vehicles} priceHashIndex={priceHashIndex} />
              
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;

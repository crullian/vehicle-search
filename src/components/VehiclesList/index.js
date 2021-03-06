import React, { Component } from 'react';
import VehicleItem from '../VehicleItem';
import Pagination from '../Pagination';

import './VehiclesList.css';

class VehiclesList extends Component {

  render() {
    const { vehicles, priceHashIndex } = this.props;
    const pages = vehicles &&
                  vehicles.metadata &&
                  Math.ceil(vehicles.metadata.total_count/vehicles.metadata.per_page);
    return (
      <div className="col-12 col-lg-9">
        <div className="vehicles-list row">
          {vehicles && vehicles.data.length > 0
            ?
            vehicles.data.map((vehicle, i) => (
              <VehicleItem key={vehicle.id} vehicle={vehicle} priceHashIndex={priceHashIndex} />
            ))
            :
            Array(9).fill().map((item, index) => (
              <VehicleItem key={index} vehicle={null} priceHashIndex={null} />
            ))
          }
        </div>

        {vehicles && vehicles.metadata && pages > 1 &&
          <Pagination
            pages={pages}
            onHandleClickPageLink={this.props.onHandleClickPageLink}
          />
        }

      </div>
    );
  }
}

export default VehiclesList;

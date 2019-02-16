import React from 'react';
import VehicleItem from '../VehicleItem';

import './VehiclesList.css';

const VehiclesList = ({vehicles, priceHashIndex}) => {
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
	  </div>
	)
}

export default VehiclesList;

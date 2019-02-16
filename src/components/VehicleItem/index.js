import React from 'react';
import './VehicleItem.css';

const VehicleItem = ({vehicle, priceHashIndex}) => {
	const price = vehicle ? `£${Math.ceil(vehicle.price_discount_and_deposit_schedule_hash[priceHashIndex].subtotal_price_pounds)}` : null;
	return (
	<div
    className="col-xs-12 col-sm-6 mb-2 col-lg-4 vehicle-item-container"
  >
    <div
    	className="inner-div p-3 left mr-1 d-flex flex-column justify-content-between align-items-end vehicle-item"
    	style={{
      	backgroundImage: `url(${vehicle ? vehicle.stock_image.image_url : null})`
    	}}
    >
	    {vehicle &&
	    	<div className="d-sm-flex justify-content-end w-100 vehicle-item-price">
		    	<div className="d-flex flex-column text-right">
		    		<h3 className="m-0 font-weight-medium">{price}</h3>
		    		<p className="m-0">A month</p>
		  		</div>
		    </div>
		  }
	    {vehicle &&
	    	<div className="d-sm-flex mt-2 justify-content-start w-100 vehicle-item-Description">
		    	<div className="d-flex flex-column">
		    		<p className="vehicle-item-year mb-0 p-0">{vehicle.year} {vehicle.vehicle_make}</p>
		    		<h4 className="vehicle-item-model m-0 py-1">{vehicle.vehicle_model} - {vehicle.engine_size_information}</h4>
		    	</div>
		    </div>
		  }
    </div>
  </div>
)}

export default VehicleItem;

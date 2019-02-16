import React from 'react';
import CloseIcon from '../CloseIcon';

const FilterContainer = (props) => {
	return (
		<div className="col-12 col-lg-3">
		
      <div className="pb-3" htmlFor="searchFilter.location" label="Location">
        <div>
          <label className="mt-2" htmlFor="searchFilter.location">Location</label>
        </div>

        <div className=""
          style={{
            position: 'relative',
            minWidth: '200px'
          }}
        >
          <label className="dropdown-label-wrapper">
            <div id="label">
              <input onChange={props.onHandleOnChange} name="location" value={props.options.location} placeholder="Enter your location" />
            </div>
            <div id="icon" onClick={props.onHandleClickClose}>
              <CloseIcon />
            </div>
          </label>
        </div>

      </div>


      <div className="pb-3" htmlFor="searchFilter.year" label="Year">
        <div>
          <label className="mt-2" htmlFor="searchFilter.year">Location</label>
        </div>

        <div className=""
          style={{
            position: 'relative',
            minWidth: '200px'
          }}
        >
          <label className="dropdown-label-wrapper">
            <div id="label">
              <input onChange={props.onHandleOnChange} name="year" value={props.options.year} placeholder="Enter vehicle	 year" />
            </div>
            <div id="icon" onClick={props.onHandleClickClose}>
              <CloseIcon />
            </div>
          </label>
        </div>

      </div>
    </div>
  );
}

export default FilterContainer;

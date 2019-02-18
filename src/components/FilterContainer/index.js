import React from 'react';
import FilterItem from '../FilterItem';
import CloseIcon from '../CloseIcon';

const FilterContainer = (props) => {
	return (
		<div className="col-12 col-lg-3">

			<FilterItem
		    filterName={'location'}
		    icon={CloseIcon}
		    options={props.options}
		    onHandleOnChange={props.onHandleOnChange}
		    onHandleClickClose={props.onHandleClickClose}
		    placeHolder={'Enter your location'}
		    inputType={'string'}
			/>

			<FilterItem
		    filterName={'year'}
		    icon={CloseIcon}
		    options={props.options}
		    onHandleOnChange={props.onHandleOnChange}
		    onHandleClickClose={props.onHandleClickClose}
		    placeHolder={'Enter vehicle year'}
		    inputType={'number'}
			/>

    </div>
  );
}

export default FilterContainer;

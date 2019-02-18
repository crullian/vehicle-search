import React, { Component } from 'react';

import './FilterItem.css';

class FilterItem extends Component {

	handleOnChangeByType = (event) => {
		let name = event.target.name;
		let value;
		if (this.props.inputType === 'string') {
			value = event.target.value
		}
		if (this.props.inputType === 'number') {
			value = Number(event.target.value)
		}
		this.props.onHandleOnChange(name, value);
	}

	handleOnClickClear = () => {
		this.props.onHandleClickClose(this.props.filterName)
	}

	render() {
		const Icon = this.props.icon || null;
		return (
			<div
				className="pb-3"
				htmlFor={`searchFilter.${this.props.filterName}`}
				label={this.props.filterName.charAt(0).toUpperCase() + this.props.filterName.slice(1)}
			>
	      <div>
	        <label
	        	className="mt-2"
	        	htmlFor={`searchFilter.${this.props.filterName}`}
        	>
        		{this.props.filterName.charAt(0).toUpperCase() + this.props.filterName.slice(1)}
        	</label>
	      </div>

	      <div className="dropdown-wrapper">
	        <label className="dropdown-label-wrapper">
	          <div id="label">
	            <input
	            	onChange={this.handleOnChangeByType}
	            	name={this.props.filterName}
	            	value={this.props.options[this.props.filterName] || ''}
	            	placeholder={this.props.placeHolder}
            	/>
	          </div>
	          {Icon &&
	          	<div id="icon" onClick={this.handleOnClickClear}>
		            <Icon />
		          </div>
		        }
	        </label>
	      </div>

	    </div>
		);
	}
}

export default FilterItem;

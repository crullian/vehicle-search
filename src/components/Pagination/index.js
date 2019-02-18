import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';

class Pagination extends Component {

	handleClickPageLink = (event) => {
		console.log('EVENT', event.selected)
		this.props.onHandleClickPageLink('page', Number(event.selected))
	}

	render() {
		// console.log('PAGES', this.props.pages);
		return (
			<nav aria-label="Page navigation example">
				<ReactPaginate
	        previousLabel={<span aria-hidden="true">&laquo;</span>}
	        nextLabel={<span aria-hidden="true">&raquo;</span>}
	        breakLabel={'...'}
	        breakClassName={'break-me'}
	        pageCount={this.props.pages}
	        marginPagesDisplayed={2}
	        pageRangeDisplayed={3}
	        onPageChange={this.handleClickPageLink}
	        containerClassName={'pagination justify-content-center mt-3'}
	        pageClassName={'page-item page-link'}
	        previousClassName={'page-item page-link'}
	        nextClassName={'page-item page-link'}
	        breakClassName={'page-item page-link'}
	        activeClassName={'active'}
	      />
      </nav>
		);
	}
}

export default Pagination;

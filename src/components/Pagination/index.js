import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';

class Pagination extends Component {

	handleClickPageLink = (event) => {
		this.props.onHandleClickPageLink('page', Number(event.selected)+1)
	}

	render() {
		// console.log('PAGES', this.props.pages);
		return (
			<nav aria-label="Page navigation example">
				<ReactPaginate
	        previousLabel={<span aria-hidden="true">&laquo;</span>}
	        nextLabel={<span aria-hidden="true">&raquo;</span>}
	        breakLabel={'...'}
	        pageCount={this.props.pages}
	        marginPagesDisplayed={2}
	        pageRangeDisplayed={3}
	        onPageChange={this.handleClickPageLink}
	        containerClassName={'pagination justify-content-center mt-3'}
	        pageClassName={'page-item'}
	        pageLinkClassName={'page-link'}
	        previousClassName={'page-item'}
	        previousLinkClassName={'page-link'}
	        nextClassName={'page-item'}
	        nextLinkClassName={'page-link'}
	        breakClassName={'page-item page-link'}
	        activeClassName={'active'}
	      />
      </nav>
		);
	}
}

export default Pagination;

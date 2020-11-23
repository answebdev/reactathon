import React from 'react';
import { Link } from 'react-router-dom';

// This takes in a couple props: 'postsPerPage' and 'totalPosts'.
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // This will give us the correct amount of page numbers.
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            {/* 'onClick' is so that the page changes when clicking on the pagination number -
              call it 'paginate' and pass in the page number (and we need to pass in 'paginate' as a prop above): */}
            {/* <a onClick={() => paginate(number)} href='#' className='page-link'> */}
            <Link
              to='/react-pagination'
              onClick={() => paginate(number)}
              className='page-link'
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

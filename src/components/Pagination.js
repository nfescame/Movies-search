import React from "react";

export default function Pagination(props) {
  const { pageCurrent, handleChangePage } = props;
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <button
            className='page-link'
            name={pageCurrent - 1}
            onClick={handleChangePage}
          >
            Previous
          </button>
        </li>
        <li className='page-item'>
          <button
            className='page-link'
            name={pageCurrent - 1}
            onClick={handleChangePage}
          >
            {pageCurrent - 1}
          </button>
        </li>
        <li className='page-item'>
          <button
            className='btn bg-info color-write'
            name={pageCurrent}
            onClick={handleChangePage}
          >
            {pageCurrent}
          </button>
        </li>
        <li className='page-item'>
          <button
            className='page-link'
            name={pageCurrent + 1}
            onClick={handleChangePage}
          >
            {pageCurrent + 1}
          </button>
        </li>
        <li className='page-item'>
          <button
            className='page-link '
            name={pageCurrent + 1}
            onClick={handleChangePage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

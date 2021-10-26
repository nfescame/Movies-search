import React from "react";

export default function Pagination(props) {
  const { pageCurrent, setPageCurrent, handleChangePage } = props;
  return (
    <nav aria-label='Page navigation example'>
      <ul class='pagination'>
        <li class='page-item'>
          <button
            class='page-link'
            onClick={() => setPageCurrent(pageCurrent - 1)}
          >
            Previous
          </button>
        </li>
        <li class='page-item'>
          <button
            class='page-link'
            name={pageCurrent - 1}
            onClick={handleChangePage}
          >
            {pageCurrent - 1}
          </button>
        </li>
        <li class='page-item'>
          <button
            class='btn bg-info color-write'
            name={pageCurrent}
            onClick={handleChangePage}
          >
            {pageCurrent}
          </button>
        </li>
        <li class='page-item'>
          <button
            class='page-link'
            name={pageCurrent + 1}
            onClick={handleChangePage}
          >
            {pageCurrent + 1}
          </button>
        </li>
        <li class='page-item'>
          <button
            class='page-link '
            onClick={() => setPageCurrent(pageCurrent + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

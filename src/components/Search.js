import React from "react";

export default function Search(props) {
  return (
    <div className='m-lg-2'>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            <i className='bi bi-search'></i>
          </span>
        </div>
        <input
          onChange={props.handleChangeSearch}
          value={props.search}
          type='text'
          className='form-control input-search'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </div>
    </div>
  );
}

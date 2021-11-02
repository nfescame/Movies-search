import React from "react";

export default function Modal(props) {
  const { move } = props;
  return (
    <>
      <div className='modal-header'>
        <h5 className='modal-title' id='staticBackdropLabel'>
          {move.Title}
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='modal'
          aria-label='Close'
        ></button>
      </div>
      <div className='container-img-info'>
        <div className='container-img'>
          {<img src={move.Poster} alt='img' />}
        </div>
        <div className='container-info'>
          <div className='modal-body'>{move.Runtime}</div>
          <div className='modal-body'>{move.imdbRating}</div>
          <div className='modal-body'>{move.Language}</div>
          <div className='modal-body'>{move.Metascore}</div>
          <div className='modal-body'>{move.BoxOffice}</div>
          <div className='modal-body'>{move.Year}</div>
        </div>
      </div>
      <div className='modal-body'>{move.Plot}</div>
      <div className='modal-body'>{move.imdbVotes}</div>
      <div className='modal-body'>{move.Actors}</div>
      <div className='modal-body'>{move.Awards}</div>
      <div className='modal-body'>{move.Country}</div>
      <div className='modal-body'>{move.DVD}</div>
      <div className='modal-body'>{move.Director}</div>
      <div className='modal-body'>{move.Genre}</div>
      <div className='modal-body'>{move.type}</div>
      <div className='modal-body'>{move.imdbID}</div>

      <div className='modal-footer'>
        <button
          type='button'
          className='btn btn-secondary'
          data-bs-dismiss='modal'
        >
          Close
        </button>
      </div>
    </>
  );
}

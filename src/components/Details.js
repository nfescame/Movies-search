import React from "react";
import { useState } from "react";
import { api, keyApi } from "../api/api";

const Details = (props) => {
  const [show, SetShow] = useState(false);
  const [movie, setMove] = useState();

  const getDetailsApi = async (event) => {
    let id = event.target.name;

    try {
      const response = await api.get(`?i=${id}&plot=full&apikey=${keyApi}`);
      setMove(response.data);
      showHiden();
    } catch (err) {
      console.log("erro");
    }
  };

  const showHiden = () => {
    show ? SetShow(false) : SetShow(true);
    console.log(show);
  };

  return (
    <div className='details-container'>
      <button
        name={props.movie.imdbID}
        onClick={getDetailsApi}
        type='button'
        class='btn btn-primary'
      >
        Details
      </button>
      {show ? (
        <div className='card card-detail' style={{ width: "14rem" }}>
          <div className='card-body'>
            <h5 className='card-title'>{movie.Title}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{movie.Director}</h6>
            <p className='card-text'>{movie.BoxOffice}</p>
            <p className='card-text'>{movie.Year}</p>
            <p className='card-text'>{movie.imdbRating}</p>
            <p className='card-text'>{movie.Runtime}</p>
            <p className='card-text'>
              {movie.Type} {movie.Genre}
            </p>

            <a href='#' className='card-link'>
              Card link
            </a>
            <a href='#' className='card-link'>
              Another link
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Details;

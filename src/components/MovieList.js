import React, { useState } from "react";
import Spinner from "./Spiner";
import Modal from "./Modal";
import { api, keyApi } from "../api/api";
import imgNotFond from "./img/No-Image-Found.png";

const MovieList = (props) => {
  const [loading, setLoading] = useState(true);
  const [move, setMove] = useState({});

  const getDetailsApi = async (event) => {
    setMove({});
    setLoading(true);
    try {
      let id = await event.target.name;
      console.log(id);
      const response = await api.get(`?i=${id}&plot=full&apikey=${keyApi}`);
      setMove(response.data);
      setLoading(false);
    } catch (err) {
      console.log("erro");
      setLoading(false);
    }
  };

  console.log(move);
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog '>
          <div className='modal-content'>
            {loading ? (
              <Spinner />
            ) : (
              <div>
                <Modal move={move} />
              </div>
            )}
          </div>
        </div>
      </div>
      {props.movies
        ? props.movies.map((movie, index) => {
            return (
              <div key={index} className='gallery-container'>
                <div className='gallery-itens'>
                  <div>
                    {/* <!-- Button trigger modal --> */}
                    <button
                      name={movie.imdbID}
                      type='button'
                      className='btn btn-primary btn-details'
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop'
                      onClick={(e) => getDetailsApi(e)}
                    >
                      Details
                    </button>

                    <img
                      src={movie.Poster === "N/A" ? imgNotFond : movie.Poster}
                      alt='movie'
                    />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default MovieList;

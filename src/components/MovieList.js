import React from "react";
import Details from "./Details.js";
import imgNotFond from "./img/No-Image-Found.png";

const MovieList = (props) => {
  return (
    <>
      {props.movies
        ? props.movies.map((movie, index) => {
            return (
              <div key={index} className='gallery-container'>
                <div className='gallery-itens'>
                  <div>
                    <Details movie={movie} />
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

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./MovieList.js";
import Search from "./Search";
import Pagination from "./Pagination.js";

import { api, keyApi } from "../api/api";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, steSearch] = useState();
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalResults, setTotalResults] = useState();

  useEffect(() => {
    api
      .get(`?s=${search}&page=${pageCurrent}&apikey=${keyApi}`)
      .then((response) => {
        setTotalResults(response.data.totalResults);
        setMovies(response.data.Search);
      })
      .catch((err) => {
        console.log("erro");
      });
  }, [search, pageCurrent]);

  const handleChangeSearch = (event) => {
    steSearch(event.target.value);
  };

  const handleChangePage = (event) => {
    const current = parseInt(event.target.name);
    console.log(totalResults / 10);
    current <= 1 ? setPageCurrent(1) : setPageCurrent(current);
  };

  const buttonUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <header>
        <p>Total Result: {totalResults}</p>
        <div className='container-components'>
          <Search handleChangeSearch={handleChangeSearch} search={search} />
          <Pagination
            handleChangePage={handleChangePage}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
          />
        </div>
      </header>
      <main>
        <div className='gallery-container'>
          <MovieList movies={movies} />
        </div>
      </main>
      <button onClick={buttonUp} type='button' class='btn btn-danger btn-topo'>
        <i class='bi bi-arrow-up'></i>
      </button>
    </div>
  );
}

export default MoviesPage;

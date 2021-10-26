import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import MoviesPage from "../components/Movies.Page";
import NavBar from "../components/NavBar";
import HomePage from "../components/Home.page";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/' component={HomePage} exact />
      <Route path='/movies' component={MoviesPage} exact />
    </BrowserRouter>
  );
};

export default Routes;

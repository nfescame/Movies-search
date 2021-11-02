import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import MoviesPage from "../components/Movies.Page";
import NavBar from "../components/NavBar";
import HomePage from "../components/Home.page";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/home' component={HomePage} exact />
      <Route path='/' component={MoviesPage} exact />
    </BrowserRouter>
  );
};

export default Routes;

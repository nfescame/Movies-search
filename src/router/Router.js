import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MoviesPage from "../components/Movies.Page";
import NavBar from "../components/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/' component={MoviesPage} exact />
    </BrowserRouter>
  );
};

export default Routes;

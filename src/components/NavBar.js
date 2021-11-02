import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav
        className='navbar  navbar-dark '
        style={{ backgroundColor: "#7D11F9" }}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'>
            Movies
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={() => (show ? setShow(false) : setShow(true))}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
      </nav>
      {show ? (
        <div
          className='container-hamburger'
          style={{
            width: "50%",
            height: "18rem",
            backgroundColor: "white",
            right: "0rem",
            position: "fixed",
            zIndex: 100,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <a href='/'>Movies</a>
        </div>
      ) : null}
    </div>
  );
}

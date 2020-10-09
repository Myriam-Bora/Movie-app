import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="movie__navigation">
      <Link to="/" className="movie__navigation__home">
        HOME
      </Link>
      <Link to="/about" className="movie__navigation__about">
        ABOUT
      </Link>
    </div>
  );
}

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="navbar">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/series">
        <p>Series</p>
      </Link>
      <Link to="/movies">
        <p>Movies</p>
      </Link>
    </div>
  );
}

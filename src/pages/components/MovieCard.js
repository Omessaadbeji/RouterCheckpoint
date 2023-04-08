import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function MovieCard({ deleteMovie, movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <ReactStars
            count={5}
            onChange={() => {}}
            size={24}
            color2={"#ffd700"}
            value={movie.Rating}
            edit={false}
          />

          <button className="btn-x" onClick={() => deleteMovie(movie.title)}>
            X
          </button>
        </div>
      </div>
    </Link>
  );
}

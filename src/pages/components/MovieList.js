import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, byName, byRate, deleteMovie }) {
  return (
    <div className="movies-list">
      {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(byName.toLowerCase()) &&
            el.Rating >= byRate
        )
        .map((el) => (
          <MovieCard deleteMovie={deleteMovie} movie={el} />
        ))}
    </div>
  );
}

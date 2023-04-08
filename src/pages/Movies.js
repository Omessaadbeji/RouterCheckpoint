import React from "react";
import MovieList from "./components/MovieList";

export default function Movies({ movies }) {
  return (
    <div>
      <MovieList deleteMovie="" movies={movies} byName="" byRate="" />
    </div>
  );
}

import React from "react";
import MovieList from "./components/MovieList";

export default function Series({ series }) {
  return (
    <div>
      <MovieList deleteMovie="" movies={series} byName="" byRate="" />{" "}
    </div>
  );
}

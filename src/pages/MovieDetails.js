import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const param = useParams();
  const movieDet = useMemo(
    () => movies.find((el) => el.id == param.id),
    [param.id]
  );
  return (
    <div className="details">
      <img src={movieDet.image} />
      <div>
        <h1>{movieDet.title}</h1>
        <p>{movieDet.description}</p>
        <h4>
          type : <span>{movieDet.type}</span>
        </h4>
      </div>
    </div>
  );
}

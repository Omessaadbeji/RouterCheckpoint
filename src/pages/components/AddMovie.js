import React, { useState } from "react";

export default function AddMovie({ Add }) {
  const [movie, setMovie] = useState({
    title: "",
    Description: "",
    Poster: "",
    Rating: 0,
  });
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn-add" onClick={() => setShow(true)}>
        +
      </button>
      {show && (
        <div className="modal-bg">
          <div className="modal-content">
            <input
              type="text"
              placeholder="movie title"
              onChange={(e) => setMovie({ ...movie, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="movie description"
              onChange={(e) =>
                setMovie({ ...movie, Description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="movie poster"
              onChange={(e) => setMovie({ ...movie, Poster: e.target.value })}
            />
            <input
              type="number"
              value=""
              placeholder="movie rating"
              onChange={(e) => setMovie({ ...movie, Rating: e.target.value })}
            />
            <button onClick={() => setShow(false)}>Cancel</button>
            <button
              onClick={() => {
                Add(movie);
                setShow(false);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

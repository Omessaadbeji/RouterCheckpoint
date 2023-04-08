import React from "react";
import ReactStars from "react-stars";

export default function ({ setByName, setByRate }) {
  return (
    <div className="search-bar">
      <div className="search-input">
        <img src="https://th.bing.com/th/id/R.34f3f3420bb165594ebd7a83dc769905?rik=IblMZKG7qdPC2g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_588.png&ehk=AtPYPfnEvR%2fGMFfZ2RTWlKqLtTjS7CNEJmA3y8QMjyU%3d&risl=&pid=ImgRaw&r=0" />

        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setByName(e.target.value)}
        />
      </div>
      <ReactStars
        count={5}
        onChange={(newValue) => setByRate(newValue)}
        size={24}
        color2={"#ffd700"}
      />
      ,
    </div>
  );
}

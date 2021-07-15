import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function EachMovie(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/getmoviesfromserver`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const MovieDetails = () => {
    return movies.map((eachMovie) => {
      return (
        <div>
          <span style={{ display: "flex", width: "75%", margin: "auto" }}>
            <div>
              <img src={eachMovie.image} />
            </div>
            <div>
              <h2>{eachMovie.title}</h2>
              <p>{eachMovie.description}</p>
              <h5>{eachMovie.director} </h5>
              <h5>{eachMovie.stars} </h5>
              <h5>{eachMovie.showtimes}</h5>
            </div>
          </span>
        </div>
      );
    });
  };

  return (
    <div>
      <MovieDetails />
    </div>
  );
}

export default EachMovie;

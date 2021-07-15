import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/getmoviesfromserver`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const ShowMovies = () => {
    return movies.map((eachMovie) => {
      return (
        <div>
          <span>
            <div>
              <img src={eachMovie.image} />
            </div>
            <div>
              <h2>{eachMovie.title}</h2>
            </div>
            <div>
              <Link to={`/movie/${eachMovie._id}`}>See more</Link>
            </div>
          </span>
        </div>
      );
    });
  };

  return (
    <div>
      Movies
      <ShowMovies />
    </div>
  );
}

export default Movies;

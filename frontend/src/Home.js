import React from "react";
import background from "./background.png";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Link to="/movies">
        <button>Check the movies!</button>
      </Link>
    </div>
  );
}

export default Home;

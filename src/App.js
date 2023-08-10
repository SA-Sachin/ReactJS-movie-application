import React, { useEffect } from "react";
import "./App.css";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9529c595";

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "movie",
  "Poster": "N/A"
};

const App = () => {
  const searchMovies = async (title) => {
    const respone = await fetch(`$(API_URL)$s =${title}`);
    const data = await respone.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="Search">
        <input
          placeholder="Search for movies"
          value="spiderman"
          onChange={() => {}}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import HomeTitle from "../Components/homeTitle/HomeTitle";
import MoviesList from "../Components/moviesList/MoviesList";
import * as api from "../Components/services/API";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTopMovie().then((res) => setMovies(res.results));
  }, []);

  return (
    <>
      <HomeTitle />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
// import { useRouteMatch } from "react-router";
import MoviesList from "../Components/moviesList/MoviesList";
import * as api from "../Components/services/API";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const match = useRouteMatch();

  useEffect(() => {
    api.fetchTopMovie().then((res) => setMovies(res.results));
  }, []);

  return movies && <MoviesList movies={movies} />;

  // return <MoviesList movies={movies} />;
};

export default HomePage;

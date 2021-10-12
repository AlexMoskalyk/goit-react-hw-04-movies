import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import MoviesList from "../Components/moviesList/MoviesList";
import * as api from "../Components/services/API";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    api.fetchTopMovie().then((res) => setMovies(res.results));
  }, []);
  console.log(movies);

  return movies && <MoviesList movies={movies} url={url} />;

  // return <MoviesList movies={movies} />;
};

export default HomePage;

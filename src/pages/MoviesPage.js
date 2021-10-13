import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
// import { useRouteMatch } from "react-router";
import MoviesList from "../Components/moviesList/MoviesList";
import SearchBar from "../Components/searchBar/SearchBar";
import * as api from "../Components/services/API";

const MoviesPage = () => {
  const history = useHistory();
  // const match = useRouteMatch();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const { search } = history.location;

  const prevQuery = search.slice(7);

  useEffect(() => {
    (prevQuery || query) &&
      api.fetchMovieByQuery(query || prevQuery).then(setMovies);
  }, [query, prevQuery]);

  const onHandleQuerySubmit = (query) => {
    setQuery(query);
    history.push({ search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={onHandleQuerySubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;

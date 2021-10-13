import React, { useEffect } from "react";
import { useState } from "react";
import { Route, useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import BtnBack from "../Components/btnBack/BtnBack";
import Cast from "../Components/cast/Cast";
import MovieInfo from "../Components/movieInfo/MovieInfo";
import Reviews from "../Components/reviews/Reviews";
import { fetchMovieById } from "../Components/services/API";

const MovieDatailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  // const [from, setFrom] = useState(null);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   location.state && setFrom(location.state.from);
  // }, [location]);

  useEffect(() => {
    fetchMovieById(movieId).then((res) => setMovie(res));
  }, [movieId]);

  const onGobackClick = () => {
    history.push({
      pathname: location.state.from.pathname,
      search: location.state.from.search,
    });
  };

  return (
    <>
      <BtnBack onGobackClick={onGobackClick} />
      {Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
      <p>Aditiobal info</p>

      <Link
        to={{
          pathname: `/movies/${movieId}/cast`,
          state: { from: location.state.from },
        }}
      >
        Cast
      </Link>
      <Link
        to={{
          pathname: `/movies/${movieId}/reviews`,
          state: { from: location.state.from },
        }}
      >
        Reviews
      </Link>

      <Route path="/movies/:movieId/cast">
        <Cast movieId={movieId} />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDatailsPage;

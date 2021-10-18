import React, { lazy, useEffect, useState } from "react";

import { Route, useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import BtnBack from "../btnBack/BtnBack";

import MovieInfo from "../movieInfo/MovieInfo";
import Reviews from "../reviews/Reviews";
import { fetchMovieById } from "../services/API";
import styles from "./MovieDetails.module.css";

const Cast = lazy(() => import("../cast/Cast") /* webpackChunkName: "cast" */);

const MovieDetails = () => {
  const location = useLocation();
  const history = useHistory();

  // const [from, setFrom] = useState(null);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

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
      <hr />
      <p className={styles.aditionalTitle}>Aditional info</p>

      <div className={styles.DetAndRevLink}>
        <Link
          className={styles.castLink}
          to={{
            pathname: `/movies/${movieId}/cast`,
            state: { from: location.state?.from || "/" },
          }}
        >
          Cast
        </Link>
        <Link
          className={styles.revLink}
          to={{
            pathname: `/movies/${movieId}/reviews`,
            state: { from: location.state?.from || "/" },
          }}
        >
          Reviews
        </Link>
      </div>
      <hr />

      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews">
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDetails;

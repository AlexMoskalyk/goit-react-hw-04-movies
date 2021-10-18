import React from "react";
import imageNoImg from "../../assets/images/placeholder.png";
import styles from "./MovieInfo.module.css";
import PropTypes from "prop-types";

const MovieInfo = ({ movie }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={
          movie.backdrop_path === null
            ? imageNoImg
            : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
        alt={movie.original_title}
      />
      <div className={styles.textcontainer}>
        <h2 className={styles.title}>
          {movie.original_title}({movie.release_date})
        </h2>
        <h3>Overview:</h3>
        <p className={styles.overviewText}>{movie.overview}</p>
        <p className={styles.score}>
          <span className={styles.scoreText}>User score</span>:
          {movie.vote_average}%
        </p>
        <h3>Genres:</h3>
        <p>
          {movie.genres &&
            movie.genres.map((genre) => (
              <span key={genre.name} className={styles.genreItem}>
                {genre.name}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;

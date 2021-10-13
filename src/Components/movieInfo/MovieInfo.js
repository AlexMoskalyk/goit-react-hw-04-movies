import React from "react";
import imageNoImg from "../../assets/images/placeholder.png";

const MovieInfo = ({ movie }) => {
  return (
    <>
      <img
        src={
          movie.backdrop_path === null
            ? imageNoImg
            : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
        alt={movie.original_title}
      />
      <div>
        <h2>
          {movie.original_title}
          {movie.release_date}
        </h2>
        <p>{movie.overview}</p>
        <p>User score:{movie.vote_average}</p>
        <p>
          Genres:
          {movie.genres &&
            movie.genres.map((genre) => (
              <span key={genre.name}>{genre.name}</span>
            ))}
        </p>
      </div>
    </>
  );
};

export default MovieInfo;

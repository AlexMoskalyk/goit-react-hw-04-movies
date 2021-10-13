import axios from "axios";

const BASE_APIKEY = "29b7e9d285ace32db2cbe7db3dfec46d";
const BASE_URL = "https://api.themoviedb.org/";

export const fetchTopMovie = () => {
  return fetch(`${BASE_URL}3/trending/movie/week?api_key=${BASE_APIKEY}`).then(
    (response) => response.json()
  );
};

export const fetchMovieByQuery = (query) => {
  return axios
    .get(
      `${BASE_URL}3/search/movie?api_key=${BASE_APIKEY}&language=en-US&query=${query}`
    )
    .then((res) => res.data.results);
};

export const fetchMovieById = (movieId) => {
  return fetch(`
${BASE_URL}3/movie/${movieId}?api_key=${BASE_APIKEY}&language=en-US`).then(
    (response) => response.json()
  );
};

export const fetchCastByMovieId = (movieId) => {
  return fetch(
    `${BASE_URL}3/movie/${movieId}/credits?api_key=${BASE_APIKEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => data.cast);
};

export const fetchRewiewsById = (movieId) => {
  return fetch(
    `${BASE_URL}3/movie/${movieId}/reviews?api_key=${BASE_APIKEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

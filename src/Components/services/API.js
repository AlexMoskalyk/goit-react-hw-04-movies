const BASE_APIKEY = "29b7e9d285ace32db2cbe7db3dfec46d";
const BASE_URL = "https://api.themoviedb.org/";

export const fetchTopMovie = () => {
  return fetch(`${BASE_URL}3/trending/movie/week?api_key=${BASE_APIKEY}`).then(
    (response) => response.json()
  );
};

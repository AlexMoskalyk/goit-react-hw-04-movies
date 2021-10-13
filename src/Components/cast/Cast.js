import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import Actor from "../actor/Actor";
import { fetchCastByMovieId } from "../services/API";

const Cast = ({ movieId }) => {
  // const { movieId } = useParams;
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCastByMovieId(movieId)
      .then(setActors)
      .catch((error) => console.log(error));
  }, [movieId]);

  return <>{actors.length > 0 && <Actor actors={actors} />}</>;
};

export default Cast;

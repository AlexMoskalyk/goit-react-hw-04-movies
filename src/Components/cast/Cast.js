import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Actor from "../actor/Actor";
import { fetchCastByMovieId } from "../services/API";

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCastByMovieId(movieId)
      .then(setActors)
      .catch((error) => console.log(error));
  }, [movieId]);

  return <Actor actors={actors} />;
};

export default Cast;

import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useState } from "react";
import ReviewsList from "../reviewsList/ReviewsList";
import { fetchRewiewsById } from "../services/API";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchRewiewsById(movieId)
      .then(setReviews)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      <ReviewsList reviews={reviews} />
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};
export default Reviews;

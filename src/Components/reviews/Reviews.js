import React, { useEffect } from "react";
import { useState } from "react";
import ReviewsList from "../reviewsList/ReviewsList";
import { fetchRewiewsById } from "../services/API";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchRewiewsById(movieId)
      .then(setReviews)
      .catch(console.log((error) => console.log(error)));
  }, [movieId]);

  return (
    <>
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;

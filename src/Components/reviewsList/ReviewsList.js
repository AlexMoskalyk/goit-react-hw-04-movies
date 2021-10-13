import React from "react";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews &&
        reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
          </li>
        ))}
    </>
  );
};

export default ReviewsList;

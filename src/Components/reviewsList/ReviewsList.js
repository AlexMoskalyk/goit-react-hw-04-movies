import React from "react";
import styles from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {reviews && reviews.length > 0 ?
        reviews.map((review) => (
          <li key={review.id} className={styles.item}>
            <h2>Author:{review.author}</h2>
            <p>{review.content}</p>
          </li>
        )): <p>No Comments</p>}
    </ul>
  );
};

export default ReviewsList;

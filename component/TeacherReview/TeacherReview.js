import React from "react";
import styles from "./TeacherReview.module.css";
import ReviewItem from "../utils/ReviewItem";
import AddReview from "../utils/AddReview";

function TeacherReview() {
  return (
    <div className={styles.reviewContainer}>
      <h3>Reviews</h3>

      <div className={styles.reviewList}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <AddReview />
      </div>
    </div>
  );
}

export default React.memo(TeacherReview);

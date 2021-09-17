import React from "react";
import styles from "./TeacherReview.module.css";
import ReviewItem from "../utils/ReviewItem";
import AddReview from "../utils/AddReview";
import useWindowSize from "../hook/useWindowSize";

function TeacherReview() {
  const { width } = useWindowSize();

  return (
    <div className={styles.reviewContainer}>
      <h3>Reviews</h3>

      <div className={styles.reviewList}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <AddReview showRating={true} showAvatar={width > 700 ? true : false} />
      </div>
    </div>
  );
}

export default React.memo(TeacherReview);

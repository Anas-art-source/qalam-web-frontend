import React from "react";
import styles from "./ReviewItem.module.css";
import Rating from "@material-ui/lab/Rating";

function ReviewItem() {
  return (
    <div className={styles.reviewItemContainer}>
      <div className={styles.avatar}></div>
      <div className={styles.reviewContentContainer}>
        <h4>Anas Khan</h4>

        <div className={styles.reviewStarsAndDateContainer}>
          <Rating
            name="hover-feedback"
            value={4}
            defaultValue={4}
            precision={0.5}
            readOnly
            size="large"
          />

          <p>week ago</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo
          rem quisquam culpa dolores dolorem eos facere esse, ducimus corporis
          doloribus minima dignissimos non ratione quia quidem! Ipsum, suscipit
          tempore.
        </p>
      </div>
    </div>
  );
}

export default React.memo(ReviewItem);

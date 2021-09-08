import Rating from "@material-ui/lab/Rating";
import React from "react";
import styles from "./WebReviewCard.module.css";

function WebReviewCard() {
  return (
    <div className={styles.webReviewCard}>
      <div className={styles.userAvatar}></div>

      <div className={styles.nameContainer}>
        <h3>Anas Khan</h3>
      </div>

      <div className={styles.ratingContainer}>
        <Rating
          name="hover-feedback"
          value={4.5}
          defaultValue={4}
          precision={0.5}
          readOnly
          size="large"
          style={{ fontSize: "2rem" }}
        />
      </div>

      <div className={styles.reviewContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
          dolorum laborum, dolore a iusto cumque id explicabo quisquam expedita,
          velit at, reiciendis eveniet? Natus corrupti necessitatibus placeat
          eligendi quo
        </p>
      </div>

      <div className={styles.dateContainer}>
        <p>3 weeks ago</p>
      </div>
    </div>
  );
}

export default React.memo(WebReviewCard);

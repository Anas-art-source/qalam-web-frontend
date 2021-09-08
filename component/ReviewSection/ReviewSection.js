import React from "react";
import styles from "./ReviewSection.module.css";
import Heading from "../utils/Heading";
import Rating from "@material-ui/lab/Rating";
import WebReviewCard from "../utils/WebReviewCard";

function ReviewSection() {
  return (
    <section className={styles.reviewSectionContainer}>
      <div className={styles.reviewSectionMainContainer}>
        <Heading main="Reviews" secondary="What People Think of us" />
      </div>

      <div className={styles.overallRatingContainer}>
        <div className={styles.overallRatingCenteredBox}>
          <h4>Overall Rating</h4>
          <Rating
            name="hover-feedback"
            value={4.5}
            defaultValue={4}
            precision={0.5}
            readOnly
            size="large"
            style={{ fontSize: "3.5rem" }}
          />
        </div>
      </div>

      <div className={styles.ratingCardContainer}>
        <WebReviewCard />
        <WebReviewCard />
        <WebReviewCard />
      </div>
    </section>
  );
}

export default React.memo(ReviewSection);

// custom svg

// <div className={styles.customShape}>
// {/* wave with background color */}
// <svg
//   className={styles.svg}
//   data-name="Layer 1"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 1200 120"
//   preserveAspectRatio="none"
// >
//   <path
//     d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//     className={styles.shape_fill}
//   ></path>
// </svg>
// </div>

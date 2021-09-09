import React, { useRef, useEffect, useState } from "react";
import styles from "./AddReview.module.css";
import { AiOutlineSend } from "react-icons/ai";
import Rating from "@material-ui/lab/Rating";

function AddReview(props) {
  return (
    <div>
      {props.showRating && (
        <div className={styles.ratingContainer}>
          <Rating
            name="hover-feedback"
            value={4}
            defaultValue={4}
            precision={0.5}
            size="large"
            style={{ fontSize: "2.6rem" }}
          />
        </div>
      )}
      <div className={styles.addReviewContainer}>
        {props.showAvatar && (
          <div className={styles.avatar}>{/* Avatar */}</div>
        )}

        <div className={styles.addReviewMainSection}>
          <div
            contentEditable="true"
            className={styles.textInput}
            data-placeholder="Enter review here..."
          >
            {/* <p>Edit this content to add your own quote</p> */}
          </div>

          <div className={styles.icon}>
            <AiOutlineSend
              className={styles.icon}
              style={{
                fontSize: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AddReview);

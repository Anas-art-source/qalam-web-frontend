import React, { useRef, useEffect, useState } from "react";
import styles from "./AddReview.module.css";
import { AiOutlineSend } from "react-icons/ai";
import Rating from "@material-ui/lab/Rating";
import useWindowSize from "../hook/useWindowSize";
import Avatar from "./Avatar";

function AddReview(props) {
  const [avatarSize, setAvatarSize] = React.useState("large");
  // const [showAvatar, setShowAvatar] = React.useState(true);
  const { width } = useWindowSize();

  React.useEffect(() => {
    // setting whether avatar should be shown or not on component mount
    // setShowAvatar(props.showAvatar);

    if (width < 900) {
      setAvatarSize("medium");
    } else {
      setAvatarSize("large");
    }
  }, [width, props.showAvatar]);

  return (
    <div>
      {props.showRating && (
        <div className={styles.ratingContainer}>
          <Rating
            name="hover-feedback"
            value={4}
            defaultValue={4}
            precision={0.5}
            size={avatarSize}
            // style={{ fontSize: "2.6rem" }}
          />
        </div>
      )}
      <div className={styles.addReviewContainer}>
        {
          props.showAvatar && (
            <Avatar
              loader="unsplash"
              src={
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              }
              size="extraSmall"
            />
          )
          // <div className={styles.avatar}>{/* Avatar */}</div>
        }

        <div className={styles.addReviewMainSection}>
          <div
            contentEditable="true"
            className={styles.textInput}
            data-placeholder="Enter review here..."
          >
            {/* <p>Edit this content to add your own quote</p> */}
          </div>

          {/* send icon */}
          <div className={styles.icon}>
            <AiOutlineSend
              style={{
                fontSize: "inherit",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AddReview);

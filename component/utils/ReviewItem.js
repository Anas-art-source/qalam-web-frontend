import React from "react";
import styles from "./ReviewItem.module.css";
import Rating from "@material-ui/lab/Rating";
import Avatar from "./Avatar";
import useWindowSize from "../hook/useWindowSize";

function ReviewItem() {
  const [avatarSize, setAvatarSize] = React.useState("large");
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (width < 400) {
      setAvatarSize("small");
    } else if (width > 400 && width < 900) {
      setAvatarSize("medium");
    } else {
      setAvatarSize("large");
    }
  }, [width]);

  return (
    <div className={styles.reviewItemContainer}>
      {/* <div className={styles.avatar}></div> */}
      <Avatar
        loader="unsplash"
        src={
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
        size="extraSmall"
      />
      <div className={styles.reviewContentContainer}>
        <h4>Anas Khan</h4>

        <div className={styles.reviewStarsAndDateContainer}>
          <Rating
            name="hover-feedback"
            value={4}
            defaultValue={4}
            precision={0.5}
            readOnly
            size={avatarSize}
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

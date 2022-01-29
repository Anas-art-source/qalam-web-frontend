import React, { memo } from "react";
import styles from "./RequestOfferCard.module.css";
import Rating from "@mui/material/Rating";
import Description from "../post/Description";
import ChatIcon from "@material-ui/icons/Chat";
import router, { useRouter } from "next/router";

export default memo(function RequestOfferCard(props) {
  const router = useRouter();

  function getDateTime(dt) {
    const datetime = new Date(dt);
    const date = datetime.toLocaleString("en-GB", {
      timeZone: "UTC",
      month: "short",
      day: "numeric",
    });

    const minutes = datetime.getMinutes();

    if (+minutes > 9)
      return `${date} ${datetime.getHours()}:${datetime.getMinutes()}`;

    return `${date} ${datetime.getHours()}:0${datetime.getMinutes()}`;
  }

  return (
    <div className={styles.offerCardWrapper}>
      <div className={styles.header}>
        <img
          src={props.data.userPicture}
          className={styles.avatarPlaceholder}
        />

        <div className={styles.headerDetail}>
          <h3
            className={styles.headerDetail_name_link}
            onClick={() => router.push(`all/${props.data.slug}`)}
          >
            {props.data.name}
          </h3>
          <div className={styles.headerDetail_dateWrapper}>
            <p className={styles.headerDetail_date}>
              {getDateTime(props.data.postedAt)}
            </p>
            <p className={styles.dot}>&#9679;</p>
            <Rating
              name="read-only"
              value={props.data.ratingAverage}
              readOnly
              precision={0.5}
            />
          </div>
        </div>

        <div className={styles.chatButton}>
          <ChatIcon />
          <h6>Send Message</h6>
        </div>

        <div className={styles.compensationWrapper}>
          <h3>Rs {props.data.compensation}</h3>
        </div>
      </div>

      <div className={styles.bidContainer}>
        <Description description={props.data.bid} />
      </div>
    </div>
  );
});

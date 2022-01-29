import React, { memo } from "react";
import styles from "./RequestCard.module.css";
import TuitionCard from "../post/TuitionCard";
import Description from "../post/Description";
import RequestOfferCard from "./RequestOfferCard";
import { connectSocketApplication } from "../../socket/socket";
import { parseDataTime } from "../utils/parseDateTime";

export default memo(function RequestCard(props) {
  const [assignment, setAssignment] = React.useState(false);

  var Notification =
    window.Notification || window.mozNotification || window.webkitNotification;
  Notification.requestPermission(function (permission) {});

  console.log(
    props.data,
    "proppppppppppppsss dataaa",
    props.data.postid.user.teacherProfile[0].slug
  );
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.header}>
        <img
          src={props.data.postid.user.userPicture}
          className={styles.avatarPlaceholder}
        />

        <div className={styles.headerDetail}>
          <h3 className={styles.headerDetail_name}>
            {props.data.postid.user.name}
          </h3>
          <p className={styles.headerDetail_date}>
            {parseDataTime(props.data.postid.createdAt)}
          </p>
        </div>

        <div className={styles.badgeWrapper}>
          <span
            className={
              props.data.postid.type == "assignment"
                ? styles.badgeAssignment
                : styles.badgeTuition
            }
          >
            {props.data.postid.type == "assignment" ? "Assignment" : "Tuition"}
          </span>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.heading}>
          {["O levels Mathematics", "O levels Accounting"].join(" | ")}
          {["Online"].map((mode) => (
            <span className={styles.badge}>{mode}</span>
          ))}
        </h3>
        <Description description={props.data.postid.description} />
      </div>

      <div className={styles.detailWrapper}>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Compensation</span>
          <p>
            Rs{" "}
            {props.data.postid.type == "assignment"
              ? props.data.postid.compensation
              : props.data.postid.fees}
          </p>

          {props.data.postid.type == "assignment" && (
            <span className={styles.secondaryHeadingSpan}>per assignment</span>
          )}
        </div>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>
            {props.data.postid.type == "assignment" ? "Deadline" : "Classes"}
          </span>
          {props.data.postid.type == "assignment" && <p>2-12-22</p>}
          {props.data.postid.type != "assignment" && (
            <>
              <p>
                {props.data.postid.minDays || 2}-
                {props.data.postid.maxDays || 4}
              </p>
              <span className={styles.secondaryHeadingSpan}>per week</span>
            </>
          )}
        </div>
      </div>

      <div className={styles.offerContainer}>
        <h3>Bids</h3>

        {props.data.applicant.map((el) => (
          <RequestOfferCard data={el} />
        ))}
      </div>
    </div>
  );
});

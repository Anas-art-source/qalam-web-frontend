import React, { memo } from "react";
import styles from "./PostCard.module.css";
import Description from "./Description";
import ApplicationModal from "./ApplicationModal";

function TuitionCard(props) {
  const [apply, setApply] = React.useState(false);

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeader}>
        <img
          src={props.data.user.userPicture}
          className={styles.avatarPlaceholder}
        />
        <div className={styles.namePlate}>
          <h4>{props.data.user.name}</h4>
          <div className={styles.dateWrapper}>
            <p>23-12-2021</p>
            <p className={styles.dot}>&#9679;</p>
            <p>Gulshan-e-iqbal, block 12, karachi</p>
          </div>
        </div>
        <div className={styles.badgeWrapper}>
          <span className={styles.badgeTuition}>Tuition</span>
        </div>
      </div>

      <div className={styles.mainBody}>
        <h3 className={styles.heading}>
          {props.data.subject.join(" | ")}
          {props.data.teachingMode.map((mode) => (
            <span className={styles.badge}>{mode}</span>
          ))}
        </h3>

        <div className={styles.descriptionContainer}>
          <Description description={props.data.description} />
        </div>
      </div>

      <div className={styles.detailWrapper}>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Fees</span>
          <p>Rs {props.data.fees}</p>
          <span className={styles.secondaryHeadingSpan}>per month</span>
        </div>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Classes</span>
          <p>
            {props.data.minDays}-{props.data.maxDays}
          </p>
          <span className={styles.secondaryHeadingSpan}>per week</span>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => {
            setApply(true);
          }}
        >
          Apply
        </button>
      </div>

      {apply && (
        <ApplicationModal
          onClickBackDrop={setApply}
          onApply={props.onApply}
          tuitionid={props.data.id}
          recieverEmail={props.data.user.email}
        />
      )}
    </div>
  );
}

export default TuitionCard;

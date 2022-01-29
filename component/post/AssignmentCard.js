import React, { memo } from "react";
import styles from "./PostCard.module.css";
import Description from "./Description";
import ApplicationModal from "./ApplicationModal";

function AssignmentCard(props) {
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
          <span className={styles.badgeAssignment}>Assignment</span>
        </div>
      </div>

      <div className={styles.mainBody}>
        <h3 className={styles.heading}>
          {props.data.courseName}
          {/* <span className={styles.badge}>Online</span> */}
        </h3>

        <div className={styles.descriptionContainer}>
          <Description description={props.data.description} />
        </div>
      </div>

      <div className={styles.detailWrapper}>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Compensation</span>
          <p>Rs {props.data.compensation}</p>
          <span className={styles.secondaryHeadingSpan}>per assignment</span>
        </div>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Deadline</span>
          <p>{props.data.deadline}</p>
          {/* <span className={styles.secondaryHeadingSpan}></span> */}
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

export default AssignmentCard;

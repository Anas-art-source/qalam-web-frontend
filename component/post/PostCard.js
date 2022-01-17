import React, { memo } from "react";
import styles from "./PostCard.module.css";

function Description(props) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className={styles.description}>
      {!showMore && props.description.split(" ").length > 50 && (
        <p
          className={styles.description}
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description.split(" ").splice(0, 50).join(" ") + "..."}
          <button>show more</button>
        </p>
      )}

      {showMore && props.description.split(" ").length > 50 && (
        <p
          className={styles.description}
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description}
          {/* <button>show less</button> */}
        </p>
      )}

      {props.description.split(" ").length < 50 && (
        <p
          className={styles.description}
          //  onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description}
          {/* <button>show less</button> */}
        </p>
      )}
    </div>
  );
}

function TuitionCard(props) {
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
        <button>Apply</button>
      </div>
    </div>
  );
}

function AssignmentCard(props) {
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
        <button>Apply</button>
      </div>
    </div>
  );
}

export default memo(function PostCard(props) {
  console.log(props.data, "data in postCard");
  return (
    <>
      {props.data.map((post) =>
        post.type == "tuition" ? (
          <TuitionCard data={post} />
        ) : (
          <AssignmentCard data={post} />
        )
      )}
    </>
  );
});

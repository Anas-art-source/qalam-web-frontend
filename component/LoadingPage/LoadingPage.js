import React, { memo } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import styles from "./LoadingPage.module.css";
import TeacherListSectionLoader from "./TeacherListSectionLoader";

function PostCardLoader() {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeader}>
        <img
          // src={props.data.user.userPicture}
          className={styles.avatarPlaceholder}
        />
        <div className={styles.namePlate}>
          <h4>Anas</h4>
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
        <h3 className={styles.heading}>O level Economics</h3>

        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <p className={styles.description_div}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.sit, amet
              consectetur adipisicing elit.s
            </p>
            <p className={styles.description_div}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. sit,
              amet consectetur adipisicing elit.
            </p>
            <p className={styles.description_div}>Lorem ipsum dolor sit,.</p>
          </div>
        </div>
      </div>

      <div className={styles.detailWrapper}>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Fees</span>
          <p>Rs 2000</p>
          <span className={styles.secondaryHeadingSpan}>per month</span>
        </div>
        <div className={styles.card}>
          <span className={styles.primaryHeadingSpan}>Classes</span>
          <p>2-3</p>
          <span className={styles.secondaryHeadingSpan}>per week</span>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default memo(function LoadingPage(props) {
  return (
    <>
      <Header active={true} />
      <div className={styles.pageWrapper}>
        <TeacherListSectionLoader />
        {/* <div className={styles.postCardLoaderWrapper}>
          <PostCardLoader />
          <PostCardLoader />
          <PostCardLoader />
        </div> */}
      </div>
    </>
  );
});

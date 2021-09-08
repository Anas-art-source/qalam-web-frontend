import React from "react";
import styles from "./TeacherDetailPage.module.css";
import TeacherHeader from "../utils/TeacherHeader";
import Header from "../Header/Header";
import TeacherCredentials from "../utils/TeacherCredentials";
import YoutubeVideo from "../utils/YoutubeVideo";
import SubjectContainer from "../utils/SubjectContainer";
import TeacherReview from "../TeacherReview/TeacherReview";

function TeacherDetailPage() {
  return (
    <div className={styles.teacherDetailContainer}>
      <TeacherHeader />
      <div className={styles.secondSection}>
        <TeacherCredentials />
        <YoutubeVideo />
      </div>
      <div className={styles.thirdSection}>
        <SubjectContainer />
        <SubjectContainer />
        <SubjectContainer />
        <SubjectContainer />
      </div>

      <div className={styles.reviewSection}>
        <TeacherReview />
      </div>
    </div>
  );
}

export default React.memo(TeacherDetailPage);
// name
// picture
// cover
// description
// rating and ratingAverage
// experience
// affiliation
// specialisation
// university
// age and experience
// contact number
// message
// location
// subjects
// reviews
// demo video
// certificates
// recommendations

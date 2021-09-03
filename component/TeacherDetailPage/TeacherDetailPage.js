import React from "react";
import styles from "./TeacherDetailPage.module.css";
import TeacherHeader from "../utils/TeacherHeader";
import Header from "../Header/Header";
import TeacherCredentials from "../utils/TeacherCredentials";
import YoutubeVideo from "../utils/YoutubeVideo";
import SubjectContainer from "../utils/SubjectContainer";

export default function TeacherDetailPage() {
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
    </div>
  );
}

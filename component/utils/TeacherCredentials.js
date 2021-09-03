import React from "react";
import styles from "./TeacherCredentials.module.css";
import { FaUniversity } from "react-icons/fa";

const iconStyle = {
  fontSize: "1.5rem",
  color: "grey",
};

export default function TeacherCredentials() {
  return (
    <div className={styles.teacherCredentialContainer}>
      <div className={styles.iconTextContainer}>
        <FaUniversity style={iconStyle} />
        <p>Institute of Business Administration</p>
      </div>
      <div className={styles.iconTextContainer}>
        <FaUniversity style={iconStyle} />
        <p>Institute of Business Administration</p>
      </div>
      <div className={styles.iconTextContainer}>
        <FaUniversity style={iconStyle} />
        <p>Institute of Business Administration</p>
      </div>
      <div className={styles.iconTextContainer}>
        <FaUniversity style={iconStyle} />
        <p>Institute of Business Administration</p>
      </div>
    </div>
  );
}

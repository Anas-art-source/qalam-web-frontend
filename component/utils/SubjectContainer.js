import React from "react";
import styles from "./SubjectContainer.module.css";

export default function SubjectContainer() {
  return (
    <div className={styles.subjectContainer}>
      <h3>O levels</h3>

      <li className={styles.subjectNameDisplay}>Economics</li>
      <li className={styles.subjectNameDisplay}>Economics</li>
      <li className={styles.subjectNameDisplay}>Economics</li>
      <li className={styles.subjectNameDisplay}>Economics</li>
      <li className={styles.subjectNameDisplay}>Economics</li>
    </div>
  );
}

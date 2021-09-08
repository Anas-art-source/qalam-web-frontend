import React from "react";
import styles from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.mainHeading}>{props.main}</h1>
      <span className={styles.secondaryHeading}>{props.secondary}</span>
    </div>
  );
}

export default React.memo(Heading);

import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerIconContainer}>{props.children}</div>
      <div className={styles.numberPlate}>
        <h3>{props.stepNumber}</h3>
      </div>

      <div className={styles.headerTitleContainer}>
        <h3>{props.label}</h3>
      </div>

      <div className={styles.descriptionContainer}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

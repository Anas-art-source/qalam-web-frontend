import React from "react";
import styles from "./Label.module.css";

export default function Label(props) {
  return (
    <div className={styles.labelContainer}>
      <p>{`${props.field} ${props.subject}`}</p>
    </div>
  );
}

import React from "react";
import styles from "./Label.module.css";

function Label(props) {
  return (
    <div className={styles.labelContainer}>
      <p>{`${props.field} ${props.subject}`}</p>
    </div>
  );
}

export default React.memo(Label);

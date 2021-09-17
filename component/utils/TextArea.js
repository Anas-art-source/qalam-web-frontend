import React from "react";
import styles from "./TextArea.module.css";

export default function TextArea(props) {
  return (
    <div className={styles.formController}>
      <label htmlFor={props.label}>{props.label}</label>
      <textarea rows={4} id={props.label} />
    </div>
  );
}

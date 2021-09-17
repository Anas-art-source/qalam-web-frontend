import React from "react";
import styles from "./CheckBox.module.css";

export default function CheckBox(props) {
  return (
    <div className={styles.checkBoxWrapper}>
      <h3>{props.title}</h3>
      {props.options.map((option) => (
        <div className={styles.checkBoxContainer} key={option}>
          <input type="checkbox" value={option} />
          <label htmlFor={option}> {option} </label>
        </div>
      ))}
    </div>
  );
}

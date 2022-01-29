import React from "react";
import styles from "./TextInput.module.css";

export default function TextInputV2(props) {
  return (
    <div className={styles.fieldWrapper}>
      <label className={styles.fieldLabel}>{props.label}</label>

      {props.type == "text" && (
        <input
          onChange={(e) => props.onChange(e.target.value)}
          className={styles.inputField}
          type="text"
          placeholder="Type course name..."
        ></input>
      )}

      {props.type == "compensation" && (
        <div className={styles.feesInputWrapper}>
          <div className={styles.currency}>Rs.</div>
          <input
            className={styles.feesInput}
            type="number"
            onChange={(e) => props.onChange(e.target.value)}
          ></input>
        </div>
      )}
    </div>
  );
}

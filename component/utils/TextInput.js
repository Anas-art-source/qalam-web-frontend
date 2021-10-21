import React from "react";
import styles from "./TextInput.module.css";

export default function TextInput(props) {
  return (
    <div className={styles.formController}>
      <label htmlFor={props.label}>
        {props.label} {props.required ? "(Required)*" : ""}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.label}
        onChange={(e) => props.onChange(e.target.value)}
        required={props.required || false}
        value={props.value}
      />
    </div>
  );
}

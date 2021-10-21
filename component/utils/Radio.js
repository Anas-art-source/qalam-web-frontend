import React from "react";
import styles from "./Radio.module.css";

export default function Radio(props) {
  return (
    <div className={styles.radioController}>
      <h4>
        {props.title} {props.required ? "(Required)*" : ""}
      </h4>
      {props.options.map((option) => (
        <div className={styles.formController} key={option}>
          <input
            type="radio"
            id="online"
            name={props.name}
            onChange={(e) => props.onChange(e.target.value)}
            value={option.toLowerCase()}
            checked={props.value === option.toLowerCase()}
          />
          <label htmlFor="online">{option}</label>
        </div>
      ))}
    </div>
  );
}

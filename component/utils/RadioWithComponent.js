import React from "react";
import styles from "./RadioWithComponent.module.css";
import Rating from "@material-ui/lab/Rating";

export default function RadioWithComponent(props) {
  return (
    <>
      {props.radioOptionsArray.map((radioOption) => (
        <div className={styles.radioContainer}>
          <input type="radio" id="rating" value="rating" name="rating" />
          <Rating
            name="hover-feedback"
            value={radioOption.value}
            defaultValue={4}
            precision={0.5}
            readOnly
          />
          <h4>{radioOption.label}</h4>
        </div>
      ))}
    </>
  );
}

import React from "react";
import styles from "./RadioWithComponent.module.css";
import Rating from "@material-ui/lab/Rating";

function RadioWithComponent(props) {
  return (
    <>
      {props.radioOptionsArray.map((radioOption) => (
        <div className={styles.radioContainer} key={radioOption.value}>
          <input
            type="radio"
            id="rating"
            value="rating"
            name="rating"
            onChange={(e) => props.onSet(radioOption.value)}
          />

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

export default React.memo(RadioWithComponent);

import { style } from "@material-ui/system";
import React from "react";
import styles from "./ServiceCard.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function ServiceCard(props) {
  return (
    <div className={styles.serviceCardContainer}>
      <div className={styles.serviceImageContainer}></div>
      <div className={styles.serviceLabelContainer}>
        <h4>label</h4>
      </div>

      <div className={styles.serviceHeaderContainer}>
        <h2>{props.heading}</h2>
      </div>

      <div className={styles.descriptionContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit
          officiis tenetur perspiciatis
        </p>
      </div>

      <div className={styles.searchButtonContainer}>
        <button className={styles.searchButton} onClick={props.onClick}>
          Start Searching
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

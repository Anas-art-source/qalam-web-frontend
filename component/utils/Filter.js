import React from "react";
import styles from "./Filter.module.css";
import CategoryButton from "./CategoryButton";
import RadioWithComponent from "../utils/RadioWithComponent";
import CloseIcon from "@material-ui/icons/Close";

const RadioButtonProps = [
  { value: 4.5, label: "4.5 and above" },
  { value: 4, label: "4 and above" },
  { value: 3.5, label: "3.5 and above" },
  { value: 3, label: "3 and above" },
  { value: 2.5, label: "2.5 and above" },
  { value: 2.5, label: "2.5 and below" },
];

function Filter(props) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.categoryDisplay}>
        <div
          className={styles.closeContainer}
          onClick={() => props.setFilterActive(false)}
        >
          <CloseIcon />
        </div>

        <div className={styles.filterHeaderContainer}>
          <h3>Categories</h3>
          <button className={styles.clearAllButton}>Clear All</button>
        </div>
        <div className={styles.categoryDisplayContainer}>
          <CategoryButton value="Home Tutors" />
          <CategoryButton value="Home-based Tutors" />
          <CategoryButton value="Assignment Helpers" />
        </div>
      </div>

      <div className={styles.categoryDisplay}>
        <h3>Distance / Location</h3>
        <div className={styles.categoryDisplayContainer}>
          <CategoryButton value="Near Me" />
        </div>
      </div>

      <div className={styles.categoryDisplay}>
        <h3>Rating</h3>
        <div className={styles.categoryDisplayContainer}>
          <RadioWithComponent radioOptionsArray={RadioButtonProps} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Filter);

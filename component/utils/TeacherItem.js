import React from "react";
import styles from "./TeacherItem.module.css";
import GradeIcon from "@material-ui/icons/Grade";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Label from "./Label";

function TeacherItem(props) {
  return (
    <li className={styles.teacherContainer} onClick={props.onClick}>
      <div className={styles.coverImageContainer}></div>
      <div className={styles.displayImageContainer}></div>
      <div className={styles.namePlate}>
        <h3>Anas Khan</h3>
      </div>
      <div className={styles.queryContainer}>
        <Label field="O level" subject="Economics" />
        <Label field="O level" subject="Business" />
        <Label field="O level" subject="Accounting" />
        <Label field="O level" subject="Economics" />
        <Label field="O level" subject="Economics" />
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.ratingContainer}>
          <GradeIcon style={{ fontSize: "2rem", color: "orange" }} />
          <p>4.5 (34)</p>
        </div>

        <div className={styles.ratingContainer}>
          <LocationOnIcon style={{ fontSize: "2rem", color: "red" }} />
          <p className={styles.address}>M.A Jinnah Road, karachi</p>
        </div>
      </div>
    </li>
  );
}

export default React.memo(TeacherItem);

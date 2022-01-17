import React, { memo } from "react";
import styles from "./Success.module.css";
import ShootingStar from "../../assets/shooting-star.png";
import SuccessImage from "../../assets/success.png";
import Image from "next/image";
import Fail from "../../assets/fail.png";
import Anxiety from "../../assets/anxiety.png";

export default memo(function Success(props) {
  return (
    <div className={styles.successWrapper}>
      <div className={styles.heading}>
        <Image
          src={props.success ? ShootingStar : Fail}
          width={40}
          height={40}
        />
        <h1>{props.success ? "Successful" : "Unsuccessful"}</h1>
      </div>

      <Image
        src={props.success ? SuccessImage : Anxiety}
        width={200}
        height={200}
      />

      <div></div>
    </div>
  );
});

import React, { memo } from "react";
import { WaveSpinner } from "react-spinners-kit";
import loadingImage from "../../assets/loading.png";
import Image from "next/image";
import styles from "./Loading.module.css";

export default memo(function Loading(props) {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.heading}>
        <Image src={loadingImage} width={40} height={40} />
        <h1>Posting in process...</h1>
      </div>

      <WaveSpinner
        className={styles.loader}
        size={50}
        color="lightblue"
        loading={true}
      />
    </div>
  );
});

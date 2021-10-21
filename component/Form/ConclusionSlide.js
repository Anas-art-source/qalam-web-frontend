import React, { memo } from "react";
import styles from "./ConclusionSlide.module.css";
import Image from "next/image";

const ConclusionSlide = memo((props) => {
  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:1000/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={styles.slideWrapper}>
      {!props.error && (
        <>
          <h2 className={styles.success_message}>Successful! </h2>
          <div className={styles.imageWrapper}>
            <Image
              loader={myLoader}
              src={"picture/webPicture/success_form.png"}
              width={300}
              height={300}
              // objectFit="cover"
            />
          </div>
          <h4 className={styles.success_detail_message}>
            Form successfully submitted for review. It will take 4-5 business
            day to review the form. If everything is right and doesnot goes
            against our policy, your teaching profile will go live. Stay tuned!
          </h4>
        </>
      )}

      {props.error && (
        <>
          <h2 className={styles.error_message}>Something went Wrong </h2>
          <div className={styles.imageWrapper}>
            <Image
              loader={myLoader}
              src={"picture/webPicture/error_form.png"}
              width={350}
              height={300}
              // objectFit="cover"
            />
          </div>
          <h4 className={styles.success_detail_message}>
            {props.error || "Unexpected error. Please try again later!"}
          </h4>
        </>
      )}
    </div>
  );
});

export default ConclusionSlide;

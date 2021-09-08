import React, { memo } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

export default memo(function Modal(props) {
  return createPortal(
    <div className={styles.modalViewContainer}>
      <div
        className={styles.backdrop}
        onClick={() => props.onClickBackDrop(false)}
      ></div>
      <div className={styles.modalContainer}>{props.children}</div>
    </div>,
    document.getElementById("myportal")
  );
});

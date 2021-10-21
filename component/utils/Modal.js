import React, { memo } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

export default memo(function Modal(props) {
  if (!process.browser) {
    return null;
  }

  return createPortal(
    <div className={styles.modalViewContainer}>
      <div
        className={props.backdropStyle ? props.backdropStyle : styles.backdrop}
        onClick={() => props.onClickBackDrop(false)}
      ></div>
      <div
        className={props.modalStyle ? props.modalStyle : styles.modalContainer}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("myportal")
  );
});

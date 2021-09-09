import React, { memo } from "react";
import styles from "./ChatWindow.module.css";
import CloseIcon from "@material-ui/icons/Close";
import AddReview from "./AddReview";
import ChatMessageGenerator from "./ChatMessageGenerator";

export default memo(function ChatWindow(props) {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h2>Anas Khan</h2>
        <div onClick={() => props.onClickCloseButton(false)}>
          <CloseIcon />
        </div>
      </div>

      <div className={styles.chatScrollView}>
        <ChatMessageGenerator />
      </div>

      <div className={styles.addMessage}>
        <AddReview />
      </div>
    </div>
  );
});

import React, { memo } from "react";
import styles from "./ChatMessageGenerator.module.css";
import { RiCheckDoubleFill } from "react-icons/ri";

function ChatNewDateLabel(props) {
  return (
    <div className={styles.chatDateContainer}>
      <span className={styles.chatDateLabel}>09 / 02 / 2021</span>
    </div>
  );
}

function ChatMessage(props) {
  return (
    <div className={styles.chatMessageWrapper}>
      <div
        className={
          props.sender
            ? `${styles.chatMessageContainer} ${styles.chatMessageContainer_sender}`
            : `${styles.chatMessageContainer}`
        }
      >
        <p className={styles.chatMessageText}>Lorem ipsum</p>

        <div className={styles.chatTimeContainer}>
          <p className={styles.chatTime}>9:14 pm</p>
          <RiCheckDoubleFill fontSize={15} color="grey" />
        </div>
      </div>
    </div>
  );
}

export default memo(function ChatMessageGenerator() {
  return (
    <div>
      <ChatNewDateLabel />

      <ChatMessage sender={true} />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
});

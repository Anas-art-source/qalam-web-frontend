import React, { memo } from "react";
import styles from "./ChatListItem.module.css";
import { RiCheckDoubleFill } from "react-icons/ri";
import { BsDash, BsDot } from "react-icons/bs";

import Avatar from "./Avatar";

export default memo(function ChatListItem(props) {
  return (
    <div className={styles.chatItemContainer} onClick={props.onClick}>
      <div className={styles.avatarContainer}>
        <Avatar
          loader="unsplash"
          src={
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          }
          size="extraSmall"
        />
      </div>
      <div className={styles.chatRightContainer}>
        <div className={styles.nameContainer}>
          <h3 className={styles.name}>Anas Khan</h3>
          <div className={styles.tickIcon}>
            <RiCheckDoubleFill
              style={{ fontSize: "inherit", fill: "inherit" }}
            />
          </div>
        </div>
        <div className={styles.messageContainer}>
          <p className={styles.message}>
            Lorem ipsum dolor sit amet consectetur= adipisicing elit. Lorem
            ipsum dolor sit amet consectetur= adipisicing elit. Lorem ipsum
            dolor sit amet consectetur= adipisicing elit.
          </p>
          <p className={styles.dot}>
            <BsDot />
          </p>
          <p className={styles.date}>9:15</p>
        </div>
      </div>
    </div>
  );
});

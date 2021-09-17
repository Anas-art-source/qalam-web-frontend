import React, { memo } from "react";
import styles from "./MessageSection.module.css";
import ChatListItem from "../utils/ChatListItem";
import ChatMessageGenerator from "../utils/ChatMessageGenerator";
import { Avatar } from "@material-ui/core";
import AddReview from "../utils/AddReview";
import useWindowSize from "../hook/useWindowSize";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default memo(function MessageSection() {
  const { width } = useWindowSize();
  const [leftPlaneCls, setLeftPlaneCls] = React.useState(`${styles.leftPane}`);
  const [mainMessageContainerCls, setMainMessageContainerCls] = React.useState(
    `${styles.mainMessageContainer}`
  );
  const [leftPaneActive, setLeftPaneActive] = React.useState(true);
  const [chatItemClickedFunction, setChatItemClickedFunction] = React.useState(
    () => {}
  );

  React.useEffect(() => {
    if (width <= 900) {
      console.log("we are here");
      if (leftPaneActive) {
        setLeftPlaneCls(`${styles.leftPane} ${styles.reveal}`);
        setMainMessageContainerCls(`${styles.hide}`);
      } else {
        setLeftPlaneCls(`${styles.leftPane} ${styles.hide}`);
        setMainMessageContainerCls(
          `${styles.mainMessageContainer} ${styles.reveal}`
        );
      }
    }

    setChatItemClickedFunction(() => {
      return () => setLeftPaneActive(false);
    });
  }, [width, leftPaneActive]);

  return (
    <section className={styles.messageSectionContainer}>
      <div className={leftPlaneCls}>
        <h3 className={styles.chatHeader}>All Chats</h3>
        <ChatListItem onClick={chatItemClickedFunction} />
      </div>
      <div className={mainMessageContainerCls}>
        <div className={styles.chatWindowHeader}>
          <div
            className={styles.arrowBackContainer}
            onClick={() => setLeftPaneActive(true)}
          >
            <AiOutlineArrowLeft fontSize="2rem" />
          </div>

          <Avatar
            loader="unsplash"
            src={
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            }
            size="extraSmall"
          />

          <h3>Anas Khan</h3>
        </div>
        <div className={styles.chatContainer}>
          <ChatMessageGenerator />
        </div>

        <div className={styles.chatFormContainer}>
          <AddReview />
        </div>
      </div>
    </section>
  );
});

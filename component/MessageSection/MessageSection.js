import React, { memo } from "react";
import styles from "./MessageSection.module.css";
import ChatListItem from "../utils/ChatListItem";
import ChatMessageGenerator from "../utils/ChatMessageGenerator";
import { Avatar } from "@material-ui/core";
import AddReview from "../utils/AddReview";
import useWindowSize from "../hook/useWindowSize";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Socket from "../../socket/socket";
import { useSelector } from "react-redux";

export default memo(function MessageSection() {
  // getting the user from the redux store
  const user = useSelector((data) => data.user);

  // this handles the responsive design of chat
  const { width } = useWindowSize();
  const [leftPlaneCls, setLeftPlaneCls] = React.useState(`${styles.leftPane}`);
  const [mainMessageContainerCls, setMainMessageContainerCls] = React.useState(
    `${styles.mainMessageContainer}`
  );
  const [leftPaneActive, setLeftPaneActive] = React.useState(true);
  const [chatItemClickedFunction, setChatItemClickedFunction] = React.useState(
    () => {}
  );

  // Js media queries for hiding and revealing chat for screens less than 900px
  React.useEffect(() => {
    if (width <= 900) {
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

  // socket
  const [socket, setSocket] = React.useState();

  const [msg, setMsg] = React.useState();

  console.log(msg, "mesaaagee");

  React.useEffect(() => {
    const s = new Socket("http://localhost:1000/messages", user.email);
    setSocket(s);
  }, []);

  React.useEffect(() => {
    if (!socket) return;
    socket.recieveMessage(setMsg);
  }, [socket]);

  // socket for chat
  function sendMessage() {
    socket.sendMessage("hafsaasim.98@gmail.com", "hey anas");
  }

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
          <button onClick={sendMessage}>click me</button>
          <AddReview />
        </div>
      </div>
    </section>
  );
});

import React, { memo, useCallback } from "react";
import socket from "../../socket/socket";
import { useSelector } from "react-redux";
import TuitionCard from "./TuitionCard";
import AssignmentCard from "./AssignmentCard";

export default memo(function PostCard(props) {
  console.log(props.data, "data in postCard");
  const [socketCli, setSocketCli] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({
    login: false,
    email: "",
  });
  const { email } = currentUser;
  const user = useSelector((data) => data.user);

  React.useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const connectToApplicationEndPoint = useCallback((email) => {
    const socketClient = new socket("http://localhost:1000/application", email);

    setSocketCli(socketClient);
  }, []);

  React.useEffect(() => {
    if (!email || !currentUser.login) return;
    connectToApplicationEndPoint(email);
  }, [email]);

  function applyHandler(postid, recieverEmail, bid, compensation) {
    socketCli.apply(postid, recieverEmail, bid, compensation, user.email);
  }

  return (
    <>
      {props.data.map((post) =>
        post.type == "tuition" ? (
          <TuitionCard data={post} onApply={applyHandler} />
        ) : (
          <AssignmentCard data={post} onApply={applyHandler} />
        )
      )}
    </>
  );
});

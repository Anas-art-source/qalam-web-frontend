import React, { memo } from "react";
import RequestSection from "../../component/RequestSection/RequestSection";
import Header from "../../component/Header/Header";
import { connectSocketApplication } from "../../socket/socket";
import { useSelector } from "react-redux";

export default memo(function () {
  const [requestData, setRequestData] = React.useState([]);
  const [notification, setNotification] = React.useState({ length: 0 });

  // for localStorage and persisting the user login
  const user = useSelector((data) => data.user);

  const { email } = user;
  React.useEffect(() => {
    if (!email) return;
    const socket = connectSocketApplication;
    socket.joinApplicationRoom(user.email);
    socket.sendRefinedRequest(user.email);
    socket.recieveRefinedRequest(setRequestData);
    socket.recieveRequest(setNotification);
    socket.checkRequest(user.email);
  }, [email]);

  return (
    <>
      <title>
        Requests {notification.length > 0 ? `(${notification.length})` : ""}
      </title>
      <Header active={true} />
      <RequestSection requestData={requestData} />
    </>
  );
});

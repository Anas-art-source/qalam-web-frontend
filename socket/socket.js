import socket from "socket.io-client";
import { socketActions } from "../store/socket";
import { useDispatch } from "react-redux";

class Socket {
  constructor(url) {
    this.socket = socket(url);
    // this.room = userEmail;
    // this.joinRoom();
    // this.joinApplicationRoom();
    // this.recieveRequest();
    // this.checkRequest();
    this.room = "";
    this.recieveRequestData = [];
  }

  joinRoom() {
    console.log(this.room, "thisss dott roommm");
    this.socket.emit("join_room", this.room);
    console.log(this, "join ROom");
  }

  joinApplicationRoom(email) {
    this.room = email;
    this.socket.emit("join_application_room", email);
  }

  apply(postid, recieverEmail, bid, compensation, applicantEmail) {
    this.socket.emit("apply", {
      postid,
      recieverEmail,
      bid,
      compensation,
      applicantEmail,
    });
  }

  sendMessage(secondPersonEmail, msg) {
    const msgObj = {
      to: secondPersonEmail,
      from: this.room,
      text: msg,
      timestamp: Date.now(),
    };

    this.socket.emit("send_message", msgObj);
  }

  recieveMessage(fn) {
    return this.socket.on("recieve_message", (msgObj) => {
      fn(msgObj);
    });
  }

  checkRequest(email) {
    this.socket.emit("check_request", { email: email });
    return this;
  }

  recieveRequest(fn) {
    this.socket.on("recieve_request", (data) => {
      console.log(data);
      fn(data.data);
    });
    return this;
  }

  sendRefinedRequest(email) {
    this.socket.emit("send_refined_request_data", { email: email });
    return this;
  }

  recieveRefinedRequest(fn) {
    this.socket.on("recieve_refined_request_data", (data) => {
      console.log("HEREEEEEEEEEEEEEEEEEEEEEEE BROOO");
      console.log(data, "heyyyyyyyyyyyy");
      fn(data.data);
    });
  }
}

export const connectSocketApplication = new Socket(
  "http://localhost:1000/application"
);

export default Socket;

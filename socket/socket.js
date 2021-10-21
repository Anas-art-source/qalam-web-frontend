import socket from "socket.io-client";

class Socket {
  constructor(url, userEmail) {
    this.socket = socket(url);
    this.room = userEmail;
    this.joinRoom();
  }

  joinRoom() {
    this.socket.emit("join_room", this.room);
    console.log(this);
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
}

export default Socket;

import styles from "../styles/Home.module.css";
import HeroSection from "../component/heroSection/HeroSection";
import ServiceSection from "../component/ServiceSection/ServiceSection";
import RegisterSection from "../component/RegisterSection/RegisterSection";
import ReviewSection from "../component/ReviewSection/ReviewSection";
import Footer from "../component/Footer/Footer";
import RegisterSectionSmall from "../component/RegisterSection/RegisterSectionSmall";
import socketio from "socket.io-client";
import React from "react";
import { userActions } from "../store/user";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  // const [socket, setSocket] = React.useState();
  // React.useEffect(() => {
  //   const socket = socketio("http://localhost:1000");
  //   setSocket(socket);
  //   console.log(socket, "SOCKETTT");

  //   socket.on("messageFromServer", (data) => console.log(data));
  // }, []);

  return (
    <>
      <title>Qalam</title>
      <HeroSection />
      {/* <button onClick={sendHi}>Press me</button> */}
      <ServiceSection />
      <RegisterSection />
      {/* <RegisterSectionSmall /> */}
      <ReviewSection />
      <Footer />
    </>
  );
}

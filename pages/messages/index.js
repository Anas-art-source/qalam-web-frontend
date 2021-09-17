import React from "react";
import Header from "../../component/Header/Header";
import MessageSection from "../../component/MessageSection/MessageSection";

export default function index() {
  return (
    <>
      <Header active={true} />
      <MessageSection />
    </>
  );
}

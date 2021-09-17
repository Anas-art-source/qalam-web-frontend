import React from "react";
import Header from "../../component/Header/Header";
import Form from "../../component/Form/Form";
import Footer from "../../component/Footer/Footer";

export default function index() {
  return (
    <>
      <Header active={true} />
      <Form />
      <Footer />
    </>
  );
}

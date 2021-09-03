import React from "react";
import TeacherDetailPage from "../../../component/TeacherDetailPage/TeacherDetailPage";
import Header from "../../../component/Header/Header";

export default function index() {
  return (
    <>
      <Header active={true} />
      <TeacherDetailPage />
    </>
  );
}

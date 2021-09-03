import React from "react";
import Header from "../../component/Header/Header";
import TeacherListSection from "../../component/TeacherListSection/TeacherListSection";
import TeacherHeroSection from "../../component/TeacherHeroSection/TeacherHeroSection";
import Footer from "../../component/Footer/Footer";

export default function index() {
  return (
    <>
      <Header />
      <TeacherHeroSection />
      <TeacherListSection />
      <Footer />
    </>
  );
}

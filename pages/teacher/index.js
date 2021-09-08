import React from "react";
import Header from "../../component/Header/Header";
import TeacherListSection from "../../component/TeacherListSection/TeacherListSection";
import TeacherHeroSection from "../../component/TeacherHeroSection/TeacherHeroSection";
import Footer from "../../component/Footer/Footer";

export default function index() {
  return (
    <>
      <Header active={true} />

      {/* teacher hero section is commented out now it will be used later when the need will arise */}
      {/* <TeacherHeroSection /> */}
      <TeacherListSection />
      <Footer />
    </>
  );
}

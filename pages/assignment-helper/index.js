import React from "react";
import Header from "../../component/Header/Header";
import TeacherListSection from "../../component/TeacherListSection/TeacherListSection";
import TeacherHeroSection from "../../component/TeacherHeroSection/TeacherHeroSection";
import Footer from "../../component/Footer/Footer";

export default function index(props) {
  return (
    <>
      <title>Assignment Helpers</title>

      <Header active={true} />

      {/* teacher hero section is commented out now it will be used later when the need will arise */}
      {/* <TeacherHeroSection /> */}
      <TeacherListSection teachers={props.data} />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1000/api/v1/teacher?categories=Assignment Helper`
  );
  let data = await res.json();
  console.log(data, "CCA");

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { data },
    revalidate: 20, // will be passed to the page component as props
  };
}

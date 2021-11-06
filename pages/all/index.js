import React from "react";
import Header from "../../component/Header/Header";
import TeacherListSection from "../../component/TeacherListSection/TeacherListSection";
import TeacherHeroSection from "../../component/TeacherHeroSection/TeacherHeroSection";
import Footer from "../../component/Footer/Footer";

export default function index(props) {
  // console.log(props.teachers, "PROPS DOT TEACHER");

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

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const query = context.query;
  let res;

  // this code block will look if the query object contains something.
  if (Object.keys(query).length > 0) {
    res = await fetch(
      `http://localhost:1000/api/v1/teacher?categories=${query.categories}&distance=${query.distance}&rating=${query.rating}`
    );
  } else {
    res = await fetch(`http://localhost:1000/api/v1/teacher`);
  }

  const teachers = await res.json();

  console.log(teachers, "<<<<TEACHER>>>>>");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      teachers,
    },
  };
}

// export function getStaticPaths(context) {
//   console.log(context, "context in all");
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           categories: "home",
//         },
//       },
//     ],
//   };
// }

import React from "react";
import TeacherDetailPage from "../../../component/TeacherDetailPage/TeacherDetailPage";
import Header from "../../../component/Header/Header";

export default function index(props) {
  return (
    <>
      <title>{props.data.name}</title>
      <Header active={true} />
      <TeacherDetailPage teacher={props.data} />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1000/api/v1/teacher/${context.params.slug}`
  );
  let data = await res.json();
  [data] = data.data;

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

export async function getStaticPaths() {
  const res = await fetch(
    `http://localhost:1000/api/v1/teacher?categories=Home-based`
  );
  let teacherSlug = await res.json();
  teacherSlug = teacherSlug.body.map((teacher) => {
    return { params: { slug: teacher.slug } };
  });

  return {
    paths: teacherSlug,
    fallback: false,
  };
}

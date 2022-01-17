import React, { memo } from "react";
import Post from "../../component/post/Post";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const index = memo((props) => {
  return (
    <>
      <Header active={true} />
      <Post data={props.data.data || []} />
      <Footer />
    </>
  );
});

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1000/api/v1/posts`);
  let data = await res.json();
  console.log(data, "Post");

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
export default index;

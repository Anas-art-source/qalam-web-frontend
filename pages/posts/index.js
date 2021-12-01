import React, { memo } from "react";
import Post from "../../component/post/Post";
import Header from "../../component/Header/Header";

const index = memo(() => {
  return (
    <>
      <Header active={true} />
      <Post />
    </>
  );
});

export default index;

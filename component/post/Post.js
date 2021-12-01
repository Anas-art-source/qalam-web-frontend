import React, { memo } from "react";
import styles from "./Post.module.css";
import PostBox from "../utils/PostBox";

const Post = memo(() => {
  return (
    <section className={styles.mainSection}>
      <section className={styles.leftSection}></section>
      <section className={styles.middleSection}>
        <PostBox />
      </section>
      <section className={styles.rightSection}></section>
    </section>
  );
});

export default Post;

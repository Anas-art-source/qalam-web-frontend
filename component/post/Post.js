import React, { memo } from "react";
import styles from "./Post.module.css";
import PostBox from "../utils/PostBox";
import PostCard from "./PostCard";

const Post = memo((props) => {
  return (
    <section className={styles.mainSection}>
      <section className={styles.leftSection}></section>
      <section className={styles.middleSection}>
        <PostBox />
        <section>
          <PostCard data={props.data} />
        </section>
      </section>
      <section className={styles.rightSection}></section>
    </section>
  );
});

export default Post;

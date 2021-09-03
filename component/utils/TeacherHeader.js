import React from "react";
import styles from "./TeacherHeader.module.css";

export default function TeacherHeader() {
  return (
    <section className={styles.teacherHeaderContainer}>
      <div className={styles.coverImage}></div>
      <div className={styles.profilePicture}></div>
      <div className={styles.namePlate}>
        <h3>Anas Khan</h3>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum,
          eos a odio est recusandae dicta dignissimos et, rem voluptas ad,
          provident quas modi. Libero architecto recusandae magni eligendi
          dolor.
        </p>
      </div>
      <div></div>
    </section>
  );
}

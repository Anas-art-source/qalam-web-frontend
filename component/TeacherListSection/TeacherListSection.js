import React from "react";
import styles from "./TeacherListSection.module.css";
import Searchbar from "../utils/Searchbar";
import TeacherItem from "../utils/TeacherItem";
import Filter from "../utils/Filter";
import { useRouter } from "next/router";

export default function TeacherListSection() {
  const router = useRouter();

  return (
    <section className={styles.teacherListContainer}>
      <div className={styles.sidebar}>
        <Filter />
      </div>
      <div className={styles.mainContent}>
        <Searchbar />
        <div className={styles.teachersContainer}>
          <TeacherItem onClick={() => router.push("/teacher/dasgrat")} />
          <TeacherItem onClick={() => router.push("/teacher/dasgrat")} />
          <TeacherItem onClick={() => router.push("/teacher/dasgrat")} />
          <TeacherItem onClick={() => router.push("/teacher/dasgrat")} />
          <TeacherItem onClick={() => router.push("/teacher/dasgrat")} />
        </div>
      </div>
    </section>
  );
}

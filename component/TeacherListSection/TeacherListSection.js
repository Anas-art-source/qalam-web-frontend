import React from "react";
import styles from "./TeacherListSection.module.css";
import Searchbar from "../utils/Searchbar";
import TeacherItem from "../utils/TeacherItem";
import Filter from "../utils/Filter";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";

function TeacherListSection(props) {
  const [filterActive, setFilterActive] = React.useState(false);
  const router = useRouter();

  return (
    <section className={styles.teacherListContainer}>
      <div
        className={
          filterActive
            ? `${styles.sidebar} ${styles.sidebar_active}`
            : `${styles.sidebar}`
        }
      >
        <Filter setFilterActive={setFilterActive} />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.searchbarContainer}>
          <Searchbar />
          <button
            className={styles.filterButton}
            onClick={() => setFilterActive((prevState) => !prevState)}
          >
            <BsFilter />
          </button>
        </div>

        <div className={styles.teachersContainer}>
          {props.teachers.body.map((teacher) => (
            <TeacherItem
              teacher={teacher}
              onClick={() => {
                router.push(`${router.pathname}/${teacher.slug}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(TeacherListSection);

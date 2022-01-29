import React from "react";
import styles from "./TeacherListSectionLoader.module.css";
import Filter from "../utils/Filter";
import Searchbar from "../utils/Searchbar";
import { BsFilter } from "react-icons/bs";

function TeacherCardLoader() {
  return (
    <li className={styles.teacherContainer}>
      <div className={styles.coverImageContainer}>
        <img
          //   src={props.teacher.coverPicture}
          className={styles.coverImage}
        />
      </div>
      <div className={styles.displayImageContainer}>
        <img className={styles.avatarPlaceholder} />
        {/* 160px */}
      </div>
      <div className={styles.namePlate}>
        <h3>Anas Khan</h3>
      </div>

      <div className={styles.teachingMode}>
        <h3>Home Tutor | Assignment Helper | Online</h3>
      </div>

      <div className={styles.queryContainer}>
        <div className={styles.labelContainer}>
          <p>O level Business</p>
        </div>
        <div className={styles.labelContainer}>
          <p>O level Business</p>
        </div>
        <div className={styles.labelContainer}>
          <p>O level Business</p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.ratingContainer}></div>

        <div className={styles.addressContainer}></div>
      </div>
    </li>
  );
}

function TeacherListSectionLoader() {
  const [filterActive, setFilterActive] = React.useState(false);

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
          <TeacherCardLoader />
          <TeacherCardLoader />
          <TeacherCardLoader />
          <TeacherCardLoader />
          <TeacherCardLoader />
          <TeacherCardLoader />
        </div>
      </div>
    </section>
  );
}

export default TeacherListSectionLoader;

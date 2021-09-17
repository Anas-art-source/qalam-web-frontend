import React from "react";
import styles from "./SubjectContainer.module.css";
import Modal from "./Modal";
import YoutubeVideo from "./YoutubeVideo";

function SubjectContainer() {
  const [viewDemoClicked, setViewDemoClicked] = React.useState(false);

  return (
    <div className={styles.subjectContainer}>
      <h3>O levels</h3>

      <li className={styles.subjectNameDisplay}>
        <h3>The Principle of Accounting</h3>
        <button
          className={styles.demoButton}
          onClick={() => setViewDemoClicked(true)}
        >
          Watch Demo
        </button>
      </li>

      {viewDemoClicked && (
        <Modal onClickBackDrop={setViewDemoClicked}>
          <YoutubeVideo width={900} height={540} />
        </Modal>
      )}
    </div>
  );
}

export default React.memo(SubjectContainer);

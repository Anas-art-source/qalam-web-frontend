import React from "react";
import styles from "./SubjectContainer.module.css";
import Modal from "./Modal";
import YoutubeVideo from "./YoutubeVideo";

function SubjectContainer(props) {
  const [viewDemoClicked, setViewDemoClicked] = React.useState(false);

  return (
    <div className={styles.subjectContainer}>
      {props.streams.map((stream) => (
        <>
          {stream.streamName && (
            <>
              <h3>
                {stream.streamName[0].toUpperCase() +
                  stream.streamName.slice(1, stream.streamName.length)}
              </h3>

              {stream.subjects.map((subject) => (
                <li className={styles.subjectNameDisplay}>
                  <h3>
                    {subject[0]?.toUpperCase() +
                      subject.slice(1, subject.length)}
                  </h3>
                  <button
                    className={styles.demoButton}
                    onClick={() => setViewDemoClicked(true)}
                  >
                    Watch Demo
                  </button>
                </li>
              ))}

              {viewDemoClicked && (
                <Modal onClickBackDrop={setViewDemoClicked}>
                  <YoutubeVideo width={900} height={540} />
                </Modal>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default React.memo(SubjectContainer);

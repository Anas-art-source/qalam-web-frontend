import React from "react";
import styles from "./TeacherDetailPage.module.css";
import TeacherHeader from "../utils/TeacherHeader";
import TeacherCredentials from "../utils/TeacherCredentials";
import YoutubeVideo from "../utils/YoutubeVideo";
import SubjectContainer from "../utils/SubjectContainer";
import TeacherReview from "../TeacherReview/TeacherReview";
import ChatIcon from "@material-ui/icons/Chat";
import ChatWindow from "../utils/ChatWindow";

function TeacherDetailPage() {
  const [chatButtonClicked, setChatButtonClicked] = React.useState(false);

  return (
    <div className={styles.teacherDetailContainer}>
      <TeacherHeader />
      <div className={styles.secondSection}>
        <TeacherCredentials />
        <YoutubeVideo />
      </div>
      <div className={styles.thirdSection}>
        <SubjectContainer />
        <SubjectContainer />
        <SubjectContainer />
        <SubjectContainer />
      </div>

      <div className={styles.reviewSection}>
        <TeacherReview />
      </div>

      <div className={styles.chatContainer}>
        <button
          className={styles.chatButton}
          onClick={() => setChatButtonClicked((prevState) => !prevState)}
        >
          <ChatIcon color="inherit" fontSize="inherit" />
        </button>

        {chatButtonClicked && (
          <div className={styles.chatWindow}>
            <ChatWindow onClickCloseButton={setChatButtonClicked} />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(TeacherDetailPage);

// name
// picture
// cover
// description
// rating and ratingAverage
// experience
// affiliation
// specialisation
// university
// age and experience
// contact number
// message
// location
// subjects
// reviews
// demo video
// certificates
// recommendations

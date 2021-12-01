import React from "react";
import styles from "./TeacherDetailPage.module.css";
import TeacherHeader from "../utils/TeacherHeader";
import TeacherCredentials from "../utils/TeacherCredentials";
import YoutubeVideo from "../utils/YoutubeVideo";
import SubjectContainer from "../utils/SubjectContainer";
import TeacherReview from "../TeacherReview/TeacherReview";
import ChatIcon from "@material-ui/icons/Chat";
import ChatWindow from "../utils/ChatWindow";
import useWindowSize from "../hook/useWindowSize";

function TeacherDetailPage(props) {
  console.log(props.teacher);
  const [chatButtonClicked, setChatButtonClicked] = React.useState(false);
  const { width } = useWindowSize();

  return (
    <div className={styles.teacherDetailContainer}>
      <TeacherHeader
        coverPicture={props.teacher.coverPicture}
        name={props.teacher.name}
        description={props.teacher.description}
        userPicture={props.teacher.userId.userPicture}
        ratingAverage={props.teacher.ratingAverage}
        rating={props.teacher.rating}
        contactNumber={props.teacher.contactNumber}
        onClickChatButton={() =>
          setChatButtonClicked((prevState) => !prevState)
        }
      />
      <div className={styles.secondSection}>
        <TeacherCredentials
          instituteName={props.teacher.instituteName}
          experienceSchool={props.teacher.experienceSchool}
          experienceYear={props.teacher.experienceYear}
          specialisation={props.teacher.specialisation}
          address={props.teacher.address}
          teachingMode={props.teacher.teachingMode.join(" | ")}
          CGPA={props.teacher.CGPA}
          educationStream={props.teacher.educationStream}
          gradeAlevels={props.teacher.gradeAlevels}
          gradeOlevels={props.teacher.gradeOlevels}
          percentageIntermediate={props.teacher.percentageIntermediate}
          percentageMatric={props.teacher.percentageMatric}
          certificates={props.teacher.certificates}
        />
        <YoutubeVideo introductionVideo={props.teacher.introductionVideo} />
      </div>

      {props.teacher.streams.length > 1 && props.teacher.streams[0].streamName && (
        <div className={styles.thirdSection}>
          <SubjectContainer streams={props.teacher.streams} />
        </div>
      )}

      {props.teacher.assignmentSubjects.length > 1 &&
        props.teacher.streams[0].streamName && (
          <div className={styles.thirdSection}>
            <SubjectContainer streams={props.teacher.streams} />
          </div>
        )}

      <div className={styles.reviewSection}>
        <TeacherReview />
      </div>

      {width > 1000 && (
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
      )}
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

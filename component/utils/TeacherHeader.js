import React from "react";
import styles from "./TeacherHeader.module.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Rating from "@material-ui/lab/Rating";
import Modal from "./Modal";
import FormFields from "./FormFields";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Avatar from "./Avatar";
import Image from "next/image";
import CoverImage from "./CoverImage";
import useWindowSize from "../hook/useWindowSize";
import router, { useRouter } from "next/router";

function TeacherHeader(props) {
  const [revealNumber, setRevealNumber] = React.useState(false);
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <section className={styles.teacherHeaderContainer}>
      {/* Cover Image */}

      <CoverImage loader="qalam" src={props.coverPicture} />

      <div className={styles.profilePictureContainer}>
        <Avatar
          loader="qalam"
          src={props.userPicture}
          size="large"
          profilePic={true}
        />
      </div>
      {/* <div className={styles.profilePicture}></div> */}
      <div className={styles.namePlate}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>

      <div className={styles.ratingContainer}>
        <Rating
          name="read-only"
          value={props.ratingAverage}
          precision={0.1}
          readOnly
          size="large"
        />

        <p>({props.rating})</p>
      </div>
      <div className={styles.footer}>
        {/* Reveal phone number button */}
        <button
          className={styles.phoneNumberButton}
          onClick={() => setRevealNumber(true)}
        >
          {props.contactNumber.slice(0, 9)}
          {/* 3 Dot Icons that hides the number */}
          <FiberManualRecordIcon
            style={{ fontSize: "inherit", marginLeft: "0.2rem" }}
          />
          <FiberManualRecordIcon
            style={{ fontSize: "inherit", marginLeft: "0.2rem" }}
          />
          <FiberManualRecordIcon
            style={{ fontSize: "inherit", marginLeft: "0.2rem" }}
          />
          <VisibilityOffIcon style={{ color: "grey", marginLeft: "0.9rem" }} />
        </button>

        {/* Chat with Tutor Button */}
        <button
          className={styles.chatButton}
          onClick={
            width > 1000
              ? props.onClickChatButton
              : () => router.push("/messages")
          }
        >
          Chat with Tutor
        </button>
      </div>

      {/* Modal that will appear when phone number button is clicked. It will only appear when user is not logged in */}
      {revealNumber && (
        <Modal onClickBackDrop={setRevealNumber}>
          <form className={styles.numberFormContainer}>
            <div
              className={styles.closeButton}
              onClick={() => setRevealNumber(false)}
            >
              <CloseRoundedIcon />
            </div>
            <h2>Provide us with your name and detail</h2>
            <FormFields
              label="Name"
              onChange={() => {}}
              leftIcon={
                <PersonOutlineIcon
                  style={{ color: "grey", fontSize: "2.5rem" }}
                />
              }
              placeholder="Type your Name Here..."
              rightIcon={
                <CheckCircleIcon style={{ color: "green", fontSize: "2rem" }} />
              }
            />
            <FormFields
              label="Phone"
              type="phone"
              onChange={() => {}}
              placeholder="Type Email Here"
              leftIcon={
                <PhoneAndroidIcon
                  style={{ color: "grey", fontSize: "2.5rem" }}
                />
              }
              rightIcon={
                <CheckCircleIcon style={{ color: "green", fontSize: "2rem" }} />
              }
            />

            <button className={styles.revealNumberButton}>
              Reveal Phone Number
            </button>
          </form>
        </Modal>
      )}
    </section>
  );
}

export default React.memo(TeacherHeader);

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

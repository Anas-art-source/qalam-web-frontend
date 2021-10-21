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

      <CoverImage
        loader="unsplash"
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
      />

      <div className={styles.profilePictureContainer}>
        <Avatar
          loader="unsplash"
          src={
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          }
          size="large"
          profilePic={true}
        />
      </div>
      {/* <div className={styles.profilePicture}></div> */}
      <div className={styles.namePlate}>
        <h3>Anas Khan</h3>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum,
          eos a odio est recusandae dicta dignissimos et, rem voluptas ad,
          provident quas modi. Libero architecto recusandae magni eligendi
          dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          laborum, eos a odio est recusandae dicta dignissimos et, rem voluptas
          ad, provident quas modi. Libero architecto recusandae magni eligendi
          dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          laborum, eos a odio est recusandae dicta dignissimos et, rem voluptas
          ad, provident quas modi. Libero architecto recusandae magni eligendi
          dolor.
        </p>
      </div>

      <div className={styles.ratingContainer}>
        <Rating
          name="read-only"
          value={2.6}
          precision={0.1}
          readOnly
          size="large"
        />

        <p>(31)</p>
      </div>
      <div className={styles.footer}>
        {/* Reveal phone number button */}
        <button
          className={styles.phoneNumberButton}
          onClick={() => setRevealNumber(true)}
        >
          0312-1202
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

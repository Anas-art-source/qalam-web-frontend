import React from "react";
import styles from "./TeacherCredentials.module.css";
import { FaUniversity, FaCertificate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrUserExpert, GrMapLocation } from "react-icons/gr";
import { BsFillCalendarFill, BsDash } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";

const iconStyle = {
  fontSize: "1.5rem",
  color: "grey",
};

function TeacherCredentials(props) {
  return (
    <div className={styles.teacherCredentialContainer}>
      <div>
        <h3 className={styles.heading}>Credentials</h3>
      </div>

      {props.instituteName && (
        <div className={styles.iconTextContainer}>
          <FaUniversity style={iconStyle} />
          <p>{props.instituteName}</p>
        </div>
      )}

      {props.experienceSchool && (
        <div className={styles.iconTextContainer}>
          <FaChalkboardTeacher style={iconStyle} />
          <p>Taught at {props.experienceSchool}</p>
        </div>
      )}

      {props.experienceYear && (
        <div className={styles.iconTextContainer}>
          <BsFillCalendarFill style={iconStyle} />
          <p>Experience of {props.experienceYear} years</p>
        </div>
      )}

      {props.specialisation && (
        <div className={styles.iconTextContainer}>
          <GrUserExpert style={iconStyle} />
          <p>Specialisation is {props.specialisation}</p>
        </div>
      )}

      {props.address && (
        <div className={styles.iconTextContainer}>
          <GrMapLocation style={iconStyle} />
          <p>{props.address}</p>
        </div>
      )}

      <div className={styles.iconTextContainer}>
        <GiTeacher style={iconStyle} />
        <p>Teaching Mode: {props.teachingMode}</p>
      </div>

      {/* acedemic records  */}
      <div>
        <h3 className={styles.heading}>Academic Records</h3>
      </div>

      {props.CGPA && (
        <div className={styles.iconTextContainer}>
          <BsDash style={iconStyle} />
          <p>{props.CGPA} CGPA</p>
        </div>
      )}

      <div className={styles.iconTextContainer}>
        <BsDash style={iconStyle} />
        <p>
          {props.educationStream.includes("O levels")
            ? `${props.gradeOlevels} in O Levels`
            : `${props.percentageMatric} in Matric`}
        </p>
      </div>

      <div className={styles.iconTextContainer}>
        <BsDash style={iconStyle} />
        <p>
          {" "}
          {props.educationStream.includes("A levels")
            ? `${props.gradeAlevels} in A Levels`
            : `${props.percentageIntermediate} in Intermediate`}
        </p>
      </div>

      {/* certifications. More Work need to be done */}

      {props.certificates.length > 0 && (
        <>
          <div>
            <h3 className={styles.heading}>Certifications</h3>
          </div>
          <div className={styles.certificateContainer}>
            <div className={styles.iconTextContainer}>
              <FaCertificate style={iconStyle} />
              <p>Social Media Marketing</p>
            </div>

            <button className={styles.certificateButton}>
              View Certificate
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(TeacherCredentials);

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

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

function TeacherCredentials() {
  return (
    <div className={styles.teacherCredentialContainer}>
      <div>
        <h3 className={styles.heading}>Credentials</h3>
      </div>
      <div className={styles.iconTextContainer}>
        <FaUniversity style={iconStyle} />
        <p>BBA from IBA (2018-2022)</p>
      </div>
      <div className={styles.iconTextContainer}>
        <FaChalkboardTeacher style={iconStyle} />
        <p>Taught at City School</p>
      </div>
      <div className={styles.iconTextContainer}>
        <BsFillCalendarFill style={iconStyle} />
        <p>Experience of 5 years</p>
      </div>
      <div className={styles.iconTextContainer}>
        <GrUserExpert style={iconStyle} />
        <p>Specialisation is Maths</p>
      </div>
      <div className={styles.iconTextContainer}>
        <GrMapLocation style={iconStyle} />
        <p>Gulshan-e-iqbal, block 4, Karachi, Pakistan</p>
      </div>

      <div className={styles.iconTextContainer}>
        <GiTeacher style={iconStyle} />
        <p>Teaching Mode: Physical and Online both</p>
      </div>

      {/* acedemic records  */}
      <div>
        <h3 className={styles.heading}>Academic Records</h3>
      </div>
      <div className={styles.iconTextContainer}>
        <BsDash style={iconStyle} />
        <p>3.30 CGPA</p>
      </div>
      <div className={styles.iconTextContainer}>
        <BsDash style={iconStyle} />
        <p>75% in Matric</p>
      </div>

      <div className={styles.iconTextContainer}>
        <BsDash style={iconStyle} />
        <p>65% in Intermediate</p>
      </div>

      {/* certifications  */}
      <div>
        <h3 className={styles.heading}>Certifications</h3>
      </div>
      <div className={styles.certificateContainer}>
        <div className={styles.iconTextContainer}>
          <FaCertificate style={iconStyle} />
          <p>Social Media Marketing</p>
        </div>

        <button className={styles.certificateButton}>View Certificate</button>
      </div>
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

import React, { memo } from "react";
import styles from "./Form.module.css";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import ConclusionSlide from "./ConclusionSlide";
import useFetch from "../hook/useFetch";
import { useDispatch } from "react-redux";
import { formDataActions } from "../../store/formData";
import { useSelector } from "react-redux";

export default memo(function Form(props) {
  const [slide, setSlide] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);
  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();
  const dispatch = useDispatch();
  const [firstSlideValid, setFirstSlideValid] = React.useState(false);
  const [secondSlideValid, setSecondSlideValid] = React.useState(false);
  const user = useSelector((data) => data.user);

  const [formData, setFormData] = React.useState({
    name: "",
    cnicNumber: "",
    description: "",
    CNICpictures: "",
    userPicture: "",
    coverPicture: "",
    introductionVideo: "",
    instituteName: "",
    CGPA: 0,
    educationStream: "",
    percentageMatric: "",
    percentageIntermediate: "",
    gradeOlevels: "",
    gradeAlevels: "",
    experienceYear: 0,
    experienceSchool: "",
    specialisation: "",
    address: "",
    teachingMode: [],
    homeBasedLocation: "",
    physicalTeachingLocations: [],
    certificatesName: [],
    certificatePictures: [],
    streams: [],
    assignmentSubjects: [],
    active: false,
    userId: "",
  });

  async function submitFormHandler() {
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("cnicNumber", formData.cnicNumber);
    fd.append("description", formData.description);
    formData.CNICpictures.forEach((file, index) => {
      fd.append("CNICpictures", file);
    });
    if (formData.userPicture !== undefined) {
      fd.append("userPicture", formData.userPicture[0]);
    }
    if (formData.coverPicture !== undefined) {
      fd.append("coverPicture", formData.coverPicture[0]);
    }
    fd.append("instituteName", formData.instituteName);
    fd.append("CGPA", formData.CGPA);
    fd.append("educationStream", JSON.stringify(formData.educationStream));
    fd.append("percentageMatric", formData.percentageMatric);
    fd.append("percentageIntermediate", formData.percentageIntermediate);
    fd.append("gradeOlevels", formData.gradeOlevels);
    fd.append("gradeAlevels", formData.gradeAlevels);
    fd.append("experienceYear", formData.experienceYear);
    fd.append("experienceSchool", formData.experienceSchool);
    fd.append("specialisation", formData.specialisation);
    fd.append("address", formData.address);
    fd.append(
      "physicalTeachingLocations",
      JSON.stringify(formData.physicalTeachingLocations)
    );
    fd.append("teachingMode", JSON.stringify(formData.teachingMode));

    if (formData.teachingMode.includes("Home-based")) {
      fd.append(
        "homeBasedLocation",
        JSON.stringify(formData.homeBasedLocation)
      );
    }
    fd.append("streams", JSON.stringify(formData.streams));
    fd.append("active", formData.active);
    fd.append("userId", user._id);
    fd.append(
      "assignmentSubjects",
      JSON.stringify(formData.assignmentSubjects)
    );

    console.log(formData, "SUNNY");
    const response = await sendRequest(
      `http://localhost:1000/api/v1/teacher`,
      "POST",
      fd,
      true
    );
  }

  // React.useEffect(() => {
  //   dispatch(formDataActions.update(formData));
  // }, [formData]);

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <div className={styles.formProgressContainer}>
          {/* 1st   */}
          <div className={styles.progressContainer}>
            <div className={styles.iconContainer}>
              <div
                className={
                  slide > 0
                    ? `${styles.icon} ${styles.icon_active}`
                    : `${styles.icon}`
                }
              >
                <BsFillPersonLinesFill fontSize="inherit" color="inherit" />
              </div>

              {/* progress bar container */}
              <div
                className={
                  slide > 0
                    ? `${styles.span} ${styles.span_active}`
                    : `${styles.span}`
                }
              >
                <div
                  className={
                    slide > 0
                      ? `${styles.spanInner} ${styles.spanInner_active}`
                      : `${styles.spanInner}`
                  }
                ></div>
              </div>
            </div>

            {/* progress title container */}
            <div className={`${styles.titleContainer}`}>
              <h4 className={`${styles.header} ${styles.header_active}`}>
                Personal Information
              </h4>
            </div>
          </div>

          {/* 2nd */}
          <div className={styles.progressContainer}>
            <div className={styles.iconContainer}>
              <div
                className={
                  slide > 1
                    ? `${styles.icon} ${styles.icon_active}`
                    : `${styles.icon}`
                }
              >
                <FaInfo fontSize="inherit" />
              </div>
              <div
                className={
                  slide > 1
                    ? `${styles.span} ${styles.span_active}`
                    : `${styles.span}`
                }
              >
                <div
                  className={
                    slide > 1
                      ? `${styles.spanInner} ${styles.spanInner_active}`
                      : `${styles.spanInner}`
                  }
                ></div>
              </div>
            </div>
            <div className={styles.titleContainer}>
              <h4 className={`${styles.header} ${styles.header_active}`}>
                Addition Information
              </h4>
            </div>
          </div>

          {/* 3rd */}
          <div className={styles.progressContainer}>
            <div className={styles.iconContainer}>
              <div
                className={
                  slide > 2
                    ? `${styles.icon} ${styles.icon_active}`
                    : `${styles.icon}`
                }
              >
                <IoIosBook fontSize="inherit" />
              </div>
              {/* <div className={styles.span}></div> */}
            </div>
            <div className={styles.titleContainer}>
              <h4 className={`${styles.header} ${styles.header_active}`}>
                Subjects
              </h4>
            </div>
          </div>
        </div>

        {/* error container */}

        {/* <div className={styles.errorContainer}>
          <p>
            Please Enter valid phone number and you might have forgotten to
            enter your name
          </p>
        </div> */}

        {/* form container */}

        <div className={styles.mainFormWrapper}>
          <div
            className={styles.mainFormContainer}
            // style={{ transform: `translateX(-${33.333 * slide}%)` }}
          >
            {slide === 0 && (
              <FirstSlide
                setFirstSlideValid={setFirstSlideValid}
                onChange={(data) =>
                  setFormData((prevState) => {
                    return { ...prevState, ...data };
                  })
                }
              />
            )}
            {slide === 1 && (
              // <div className={styles.slide}>
              <SecondSlide
                setSecondSlideValid={setSecondSlideValid}
                onChange={(data) =>
                  setFormData((prevState) => {
                    return { ...prevState, ...data };
                  })
                }
              />
              // </div>
            )}
            {slide === 2 && (
              <ThirdSlide
                onChange={(data) => {
                  setFormData((prevState) => {
                    return { ...prevState, streams: data };
                  });
                }}
              />
            )}

            {slide === 3 && <ConclusionSlide error={error} />}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          {slide > 0 && (
            <button
              onClick={() => setSlide((prevState) => prevState - 1)}
              className={`${styles.btn} ${styles.backBtn}`}
            >
              Back
            </button>
          )}

          {slide === 0 && (
            <button
              disabled={!firstSlideValid}
              onClick={() => {
                dispatch(formDataActions.update(formData));
                setSlide((prevState) => prevState + 1);
              }}
              className={`${styles.btn} ${styles.nextBtn}`}
              // disabled={true}
            >
              Next
            </button>
          )}

          {slide === 1 && (
            <button
              disabled={!secondSlideValid}
              onClick={() => {
                dispatch(formDataActions.update(formData));
                setSlide((prevState) => prevState + 1);
              }}
              className={`${styles.btn} ${styles.nextBtn}`}
              // disabled={true}
            >
              Next
            </button>
          )}

          {slide === 2 && (
            <button
              onClick={async () => {
                setSlide((prevState) => prevState + 1);
                await submitFormHandler();
              }}
              className={`${styles.btn} ${styles.submitBtn}`}
            >
              Submit
            </button>
          )}

          {slide === 3 && (
            <button
              onClick={async () => {
                setSlide(0);
              }}
              className={`${styles.btn} ${styles.submitBtn}`}
            >
              Start Again
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

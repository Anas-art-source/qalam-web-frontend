import React, { memo } from "react";
import styles from "./Form.module.css";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

export default memo(function Form(props) {
  const [slide, setSlide] = React.useState(0);

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

        <div className={styles.errorContainer}>
          <p>
            Please Enter valid phone number and you might have forgotten to
            enter your name
          </p>
        </div>

        {/* form container */}

        <div className={styles.mainFormWrapper}>
          <div
            className={styles.mainFormContainer}
            // style={{ transform: `translateX(-${33.333 * slide}%)` }}
          >
            {slide === 0 && <FirstSlide />}
            {slide === 1 && (
              // <div className={styles.slide}>
              <SecondSlide />
              // </div>
            )}
            {slide === 2 && <ThirdSlide />}
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

          {slide < 2 && (
            <button
              onClick={() => setSlide((prevState) => prevState + 1)}
              className={`${styles.btn} ${styles.nextBtn}`}
            >
              Next
            </button>
          )}

          {slide === 2 && (
            <button
              onClick={() => setSlide((prevState) => prevState + 1)}
              className={`${styles.btn} ${styles.submitBtn}`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

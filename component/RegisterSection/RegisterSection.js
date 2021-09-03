import React from "react";
import styles from "./RegisterSection.module.css";
import Card from "../utils/Card";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { HiColorSwatch, HiSparkles, HiClock } from "react-icons/hi";

export default function RegisterSection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.customShape}>
        {/* wave with background color */}
        <svg
          className={styles.svg}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.firstCard}>
            <Card
              stepNumber="1"
              label="Login | Singup"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro maiores aliquid quas temporibus voluptates repellendus"
            >
              <PersonOutlineIcon style={{ fontSize: "4rem" }} />
            </Card>

            <Card
              stepNumber="2"
              label="Registeration Form"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro maiores aliquid quas temporibus voluptates repellendus"
            >
              <HiColorSwatch style={{ fontSize: "4rem" }} />
            </Card>
          </div>
          <div className={styles.secondCard}>
            <Card
              stepNumber="3"
              label="Wait For Response"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro maiores aliquid quas temporibus voluptates repellendus"
            >
              <HiClock style={{ fontSize: "4rem" }} />
            </Card>

            <Card
              stepNumber="4"
              label="Start Teaching"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro maiores aliquid quas temporibus voluptates repellendus"
            >
              <HiSparkles style={{ fontSize: "4rem" }} />
            </Card>
          </div>
          <div className={styles.thirdCard}>
            <h2 className={styles.actionHeading}>
              Get yourself register with the largest network of tutors and
              students
            </h2>
            <p className={styles.actionDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quis esse ipsam, quisquam inventore corrupti ipsa magnam
              praesentium rerum laboriosam nulla odio sint, qui ipsum
              accusantium sunt, quaerat repellat ex?
            </p>

            <button className={styles.registerButton}>Get Register !</button>
          </div>
        </div>
      </div>
    </section>
  );
}

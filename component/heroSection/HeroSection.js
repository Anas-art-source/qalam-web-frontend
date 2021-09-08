import React from "react";
import styles from "./HeroSection.module.css";

import Header from "../Header/Header";
import WaveSvg from "../utils/WaveSvg";

function HeroSection() {
  return (
    <div className={styles.sectionContainer}>
      <Header />

      <div className={styles.sectionMainContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.heading}>
            One Stop solution for all your educational needs!
          </h1>
          <button className={styles.searchButton}>Get Started</button>
        </div>

        <div className={styles.imageContainer}></div>
      </div>

      <div className={styles.svgContainer}>
        <WaveSvg />
      </div>
    </div>
  );
}

export default React.memo(HeroSection);

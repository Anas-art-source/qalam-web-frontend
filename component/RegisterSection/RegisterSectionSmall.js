import React from "react";
import styles from "./RegisterSectionSmallScreen.module.css";
import WaveSvg from "../utils/WaveSvg";

// This component was not used

function RegisterSectionSmall() {
  return (
    <section className={styles.registerSection}>
      <div>
        <WaveSvg />
      </div>
    </section>
  );
}

export default React.memo(RegisterSectionSmall);

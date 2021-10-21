import React from "react";
import styles from "./Footer.module.css";
import { FaHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.developerContainer}>
        <h2>
          Made with <FaHeart style={{ color: "red", margin: "0 0.6rem" }} /> by
          Anas Khan
        </h2>
      </div>

      <div className={styles.socialMediaContainer}>
        <FaFacebook style={{ fontSize: "2rem", margin: "0 1rem" }} />
        <FaInstagram style={{ fontSize: "2rem", margin: "0 1rem" }} />
        <FaTwitter style={{ fontSize: "2rem", margin: "0 1rem" }} />
      </div>

      {/* <div className={styles.detailContainer}></div> */}
    </section>
  );
}

export default React.memo(Footer);

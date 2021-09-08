import React from "react";
import styles from "./Header.module.css";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useRouter } from "next/router";
import HeaderMobile from "./HeaderMobile";
import useWindowSize from "../hook/useWindowSize";
import Modal from "../utils/Modal";
import ActionSection from "../ActionSection/ActionSection";

function HeaderLarge(props) {
  const router = useRouter();

  return (
    <>
      <nav
        className={
          props.scrolled
            ? `${styles.navContainer_scrolled}`
            : `${styles.navContainer}`
        }
      >
        <div className={styles.logoContainer} onClick={() => router.push("/")}>
          <h1>Qalam</h1>
        </div>

        <ul className={styles.navigationBarContainer}>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Blog</a>
          </li>

          <li>
            <a className={styles.joinButton}>Join Us !</a>
          </li>
        </ul>

        <div className={styles.actionContainer}>
          <div
            className={styles.actionButton}
            onClick={() => router.push("/action/login")}
          >
            <PersonOutlineOutlinedIcon />
            <h3>Login </h3>
          </div>
          <div
            className={`${styles.actionButton} ${styles.actionButton_signup}`}
            onClick={() => router.push("/action/signup")}
          >
            <PersonAddOutlinedIcon />
            <h3>Signup</h3>
          </div>
        </div>
      </nav>
    </>
  );
}

function Header(props) {
  // props : active

  const { width, height } = useWindowSize();

  // scrolled in set internally. It is not a props. it will listen to the scroll event
  const [scrolled, setScrolled] = React.useState(false);

  // taking out the active from the object
  const { active } = props;

  React.useEffect(() => {
    // if we have already pass active props as true. This will
    // ensure that header has background color or in other words,
    // has navContainer_scrolled class

    if (active) setScrolled(true);

    // if the active props is not passed, then header default behaviour will take place
    // default behaviour is that before any scrolling, the header has no background color or has default navContainer class or styling
    // when it is scrolled it get one extra class that is navContainer_active class or styling
    if (!active) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 0) return setScrolled(true);
        return setScrolled(false);
      });
    }

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 0) return setScrolled(true);
        return setScrolled(false);
      });
    };
  }, [active]);

  let HeaderToDisplay;

  if (width > 1200) {
    HeaderToDisplay = <HeaderLarge scrolled={scrolled} />;
  } else {
    HeaderToDisplay = <HeaderMobile scrolled={scrolled} />;
  }
  return <>{HeaderToDisplay}</>;
}

export default React.memo(Header);

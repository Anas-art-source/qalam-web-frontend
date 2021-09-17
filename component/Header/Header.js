import React from "react";
import styles from "./Header.module.css";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useRouter } from "next/router";
import HeaderMobile from "./HeaderMobile";
import useWindowSize from "../hook/useWindowSize";
import Modal from "../utils/Modal";
import ActionSection from "../ActionSection/ActionSection";
import ChatIcon from "@material-ui/icons/Chat";
import Avatar from "../utils/Avatar";

function HeaderLarge(props) {
  const router = useRouter();
  const [login, setLogin] = React.useState(false);

  // ActionCOntainerChildren is the right part of the big screen navigation

  let ActionContainerChildren;
  if (!login) {
    // it the user is not login, they are shows the sign up and login button
    ActionContainerChildren = (
      <>
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
      </>
    );
  } else {
    // if the user is login it shows users its own avatar. Avatar redirect user to its own profile, edit and setting and signout
    // if user is login, is also shows the message. this redirect user to messenger page
    ActionContainerChildren = (
      <>
        <div className={styles.actionButton}>
          <div
            className={styles.chatIconContainer}
            onClick={() => router.push("/messages")}
          >
            <ChatIcon style={{ fontSize: "2.6rem" }} />
            <span>9+</span>
          </div>
        </div>

        <div className={styles.actionButton}>
          <Avatar
            loader="unsplash"
            src={
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            }
            size="extraSmall"
          />
        </div>
      </>
    );
  }

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
            <a
              className={styles.joinButton}
              onClick={() => router.push("/form")}
            >
              Join Us !
            </a>
          </li>
        </ul>

        <div className={styles.actionContainer}>{ActionContainerChildren}</div>
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

  if (width > 900) {
    HeaderToDisplay = <HeaderLarge scrolled={scrolled} />;
  } else {
    HeaderToDisplay = <HeaderMobile scrolled={scrolled} />;
  }
  return <>{HeaderToDisplay}</>;
}

export default React.memo(Header);

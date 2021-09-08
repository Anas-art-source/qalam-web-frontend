import React from "react";
import styles from "./HeaderMobile.module.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import PersonIcon from "@material-ui/icons/Person";
import { useRouter } from "next/router";

function HeaderMobile(props) {
  const router = useRouter();

  console.log(props.scrolled, "scrilled in header mobile");

  const [menuButtonClicked, setMenuButtonClicked] = React.useState(false);

  return (
    <>
      {menuButtonClicked && (
        <>
          <div
            className={styles.menuBackdrop}
            onClick={() => setMenuButtonClicked(false)}
          ></div>
          <div
            className={
              menuButtonClicked
                ? `${styles.menuDrawer} ${styles.menuDrawer_active}`
                : `${styles.menuDrawer}`
            }
          >
            <div className={styles.drawerHeader}>
              <div className={styles.avatar}></div>
              <h4>Anas Khan</h4>
            </div>
            <div className={styles.navBar}>
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Our Team</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
              <div className={styles.joinContainer}>
                <a>Join Us!</a>
              </div>
            </div>
          </div>
        </>
      )}

      <nav
        className={
          props.scrolled
            ? `${styles.navigationContainer} ${styles.navigationContainer_active}`
            : `${styles.navigationContainer}`
        }
      >
        <div
          className={styles.hamburgerMenu}
          onClick={() => setMenuButtonClicked(true)}
        >
          <MenuRoundedIcon style={{ fontSize: "2rem" }} fill="white" />
        </div>
        <div className={styles.logoContainer} onClick={() => router.push("/")}>
          <h4>Qalam</h4>
        </div>

        <div
          className={styles.loginContainer}
          onClick={() => router.push("/action/login")}
        >
          <PersonIcon style={{ fill: "white" }} />
        </div>
      </nav>
    </>
  );
}

export default React.memo(HeaderMobile);

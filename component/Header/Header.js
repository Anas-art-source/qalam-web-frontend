import React from "react";
import styles from "./Header.module.css";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import router, { useRouter } from "next/router";
import HeaderMobile from "./HeaderMobile";
import useWindowSize from "../hook/useWindowSize";
import Modal from "../utils/Modal";
import ActionSection from "../ActionSection/ActionSection";
import ChatIcon from "@material-ui/icons/Chat";
import Avatar from "../utils/Avatar";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import useFetch from "../hook/useFetch";
import ImageUpload from "../utils/ImageUpload";

function UserOptionModal(props) {
  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  const dispatch = useDispatch();

  async function logoutHandler() {
    const response = await sendRequest(
      `http://localhost:1000/api/v1/actions/logout`,
      "POST"
    );
    if (response && response.message === "successful") {
      localStorage.removeItem("user");
      dispatch(userActions.logout());
    }
  }

  return (
    <>
      <ul className={styles.dropDownList}>
        <li>
          {/* picture contain the modal logic */}
          <a onClick={() => props.setUploadPictureModal(true)}>
            Upload Profile Picture
          </a>
        </li>
        <li>
          <a>Edit Profile</a>
        </li>
        <li>
          <a>Change Password</a>
        </li>
        <li>
          <a onClick={logoutHandler}>Log out</a>
        </li>
      </ul>
    </>
  );
}

function HeaderLarge(props) {
  const router = useRouter();
  const [optionActive, setOptionActive] = React.useState(false);
  const dispatch = useDispatch();

  const [cookie] = useCookies();
  const [uploadPictureModal, setUploadPictureModal] = React.useState(false);
  const [userPicture, setUserPicture] = React.useState([]);
  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  async function uploadProfilePictureHandler() {
    // api endpoint for patching the user picture
    const formData = new FormData();
    userPicture.forEach((file, index) => {
      formData.append("userPicture", file);
    });

    const response = await sendRequest(
      `http://localhost:1000/api/v1/users/userPicture`,
      "PATCH",
      formData,
      true
    );

    if (response.message === "successful") {
      dispatch(userActions.login(response.data));
    }

    // router.reload();
    setUploadPictureModal(false);
  }

  // it the user is not login, they are shows the sign up and login button
  const ActionContainerChildrenLogout = (
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
  // if the user is login it shows users its own avatar. Avatar redirect user to its own profile, edit and setting and signout
  // if user is login, is also shows the message. this redirect user to messenger page
  const ActionContainerChildrenLogin = (
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
        {optionActive && (
          <div
            className={styles.backdrop}
            onClick={() => setOptionActive(false)}
          ></div>
        )}

        <div
          className={styles.avatar}
          onClick={() => setOptionActive((prevState) => !prevState)}
        >
          <Avatar
            loader={props.user.userType}
            src={props.user.userPicture}
            size="extraSmall"
          />

          {optionActive && (
            <div className={styles.dropDownMenu}>
              <UserOptionModal setUploadPictureModal={setUploadPictureModal} />
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Upload picture modal contains the logic of uploading the profile picture */}
      {uploadPictureModal && (
        <Modal onClickBackDrop={() => setUploadPictureModal(false)}>
          <div className={styles.imageModal}>
            <ImageUpload
              label="Display"
              maxSize={1}
              minSize={1}
              onChange={(data) => setUserPicture(data)}
            />
            {userPicture.length > 0 && (
              <button
                className={styles.btnUpload}
                onClick={uploadProfilePictureHandler}
              >
                Done
              </button>
            )}
          </div>
        </Modal>
      )}

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

        <div className={styles.actionContainer}>
          {props.user.login && <>{ActionContainerChildrenLogin} </>}
          {!props.user.login && <>{ActionContainerChildrenLogout} </>}
        </div>
      </nav>
    </>
  );
}

function Header(props) {
  // props : active

  const { width, height } = useWindowSize();

  const [currentUser, setCurrentUser] = React.useState();

  // scrolled in set internally. It is not a props. it will listen to the scroll event
  const [scrolled, setScrolled] = React.useState(false);

  // taking out the active from the object
  const { active } = props;

  // useDispatch hook
  const dispatch = useDispatch();

  // for localStorage and persisting the user login
  const user = useSelector((data) => data.user);

  React.useEffect(() => {
    setCurrentUser(user);
  }, [user]);

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

  // this function will take the user stored in local storage on mount and dispatch action to redux store that is user
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user, "userss in app heroo page");
    if (!user || Object.keys(user) === 0) {
      dispatch(userActions.logout());
    } else {
      dispatch(userActions.login(user));
    }
  }, []);

  let HeaderToDisplay;

  if (width > 900) {
    HeaderToDisplay = <HeaderLarge scrolled={scrolled} user={currentUser} />;
  } else {
    HeaderToDisplay = <HeaderMobile scrolled={scrolled} user={currentUser} />;
  }
  return <>{HeaderToDisplay}</>;
}

export default React.memo(Header);

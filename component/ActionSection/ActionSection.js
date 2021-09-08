import React from "react";
import styles from "./ActionSection.module.css";
import FormFields from "../utils/FormFields";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import GoogleButton from "react-google-button";
import FacebookLogin from "react-facebook-login";
import { useRouter } from "next/router";

function ActionSection(props) {
  // this component renders the login and signup form.
  // It takes the path props to make sure which field to render and which field to hide
  const router = useRouter();
  const Login = props.path === "login" ? true : false; // it will be used to display certain fields and hide certain field

  return (
    <section className={styles.actionContainer}>
      <div className={styles.middleContainer}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          {/* logo-- will be inserted here late */}
          <h2 className={styles.logo}>Qalam</h2>
          <h1 className={styles.welcome}>Welcome to the family</h1>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, dignissimos maiores repudiandae, ratione obcaecati ex
            harum necessitatibus quae, molestiae molli
          </p>

          <form>
            {!Login && (
              <FormFields
                label="Name"
                leftIcon={
                  <PersonOutlineIcon
                    style={{ color: "grey", fontSize: "2.5rem" }}
                  />
                }
                placeholder="Type your Name Here..."
                rightIcon={
                  <CheckCircleIcon
                    style={{ color: "green", fontSize: "2rem" }}
                  />
                }
              />
            )}

            <FormFields
              label="Email"
              leftIcon={
                <MailOutlineIcon
                  style={{ color: "grey", fontSize: "2.5rem" }}
                />
              }
              placeholder="Type Email Here"
              rightIcon={
                <CheckCircleIcon style={{ color: "green", fontSize: "2rem" }} />
              }
            />

            <FormFields
              type="password"
              label="Password"
              leftIcon={
                <LockOpenIcon style={{ color: "grey", fontSize: "2.5rem" }} />
              }
              placeholder="Type Password Here"
              rightIcon={
                <CheckCircleIcon style={{ color: "green", fontSize: "2rem" }} />
              }
            />

            {!Login && (
              <FormFields
                type="password"
                label="Confirm Password"
                leftIcon={
                  <LockOpenIcon style={{ color: "grey", fontSize: "2.5rem" }} />
                }
                placeholder="Confirm Password Here..."
                rightIcon={
                  <CheckCircleIcon
                    style={{ color: "green", fontSize: "2rem" }}
                  />
                }
              />
            )}

            <FormFields
              label="Phone"
              type="phone"
              leftIcon={
                <PhoneAndroidIcon
                  style={{ color: "grey", fontSize: "2.5rem" }}
                />
              }
              placeholder="Type Email Here"
              rightIcon={
                <CheckCircleIcon style={{ color: "green", fontSize: "2rem" }} />
              }
            />
          </form>

          <div className={styles.buttonContainer}>
            <button className={styles.signupButton}>
              {Login ? "Log In" : "Sign Up Now"}
            </button>
            <button
              className={styles.loginButton}
              onClick={() => {
                router.push(`/action/${Login ? "signup" : "login"}`);
              }}
            >
              {Login ? "Sign Up Now" : "Log In"}
            </button>
          </div>

          <div className={styles.socialLoginContainer}>
            <p className={styles.socialLoginText}>Or Login / Sign Up with </p>
            <div className={styles.socialButtonsContainer}>
              <GoogleButton
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
              <FacebookLogin
                appId="1088597931155576"
                fields="name,email,picture"
                cssClass={styles.fbButton}
                icon="fa-facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ActionSection);

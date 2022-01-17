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
import useFormValidation from "../hook/useFormValidation";
import useFetch from "../hook/useFetch";
import { userActions } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../AuthForm/AuthForm";

function ActionSection(props) {
  // this component renders the login and signup form.
  // It takes the path props to make sure which field to render and which field to hide
  const router = useRouter();
  const Login = props.path === "login" ? true : false; // it will be used to display certain fields and hide certain field

  // useDispatch hook for dispatching action to redux store
  const dispatch = useDispatch();

  // useSelector hook for selecting data from redux store
  const user = useSelector((data) => data.user);

  console.log(
    user,
    "USSSSSSSSSSSSSSSSSSEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"
  );

  // custom hook for fetch
  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  console.log(error, "ERROR IS AXIOS");

  // initialising the form data
  // name, email, password, confirm password, phone number
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordConfirm, setPasswordConfirm] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();

  console.log(name, "name", email, password, passwordConfirm, phoneNumber);

  async function submitToServer() {
    const jsonObj = {
      userType: "qalam",
      name,
      email,
      password,
      passwordConfirm,
      phoneNumber,
    };

    // send request to login endpoint
    if (Login) {
      const request = await sendRequest(
        "http://localhost:1000/api/v1/actions/login",
        "POST",
        jsonObj
      );

      if (request && request.message === "success") {
        dispatch(userActions.login(request.data));
        if (props.modal) {
          console.log("hereeeeeee in lgoinnnnnnn");
          router.reload();
        } else {
          router.replace("/");
        }
      }
    }

    // send request to signup endpoint
    if (!Login) {
      const request = await sendRequest(
        "http://localhost:1000/api/v1/actions/signup",
        "POST",
        jsonObj
      );

      if (request && request.message === "success") {
        dispatch(userActions.login(request.data));
        if (props.modal) {
          router.reload();
        } else {
          router.replace("/");
        }

        console.log(request, "signup");
      }
    }
  }

  return (
    <section className={styles.actionContainer}>
      <div className={styles.middleContainer}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          {/* logo-- will be inserted here late */}
          <AuthForm path={props.path} />
        </div>
      </div>
    </section>
  );
}

export default React.memo(ActionSection);

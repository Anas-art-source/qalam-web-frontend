import React, { memo } from "react";
import styles from "./AuthBox.module.css";
import Modal from "../utils/Modal";
import AuthForm from "../AuthForm/AuthForm";

export default memo(function AuthBox(props) {
  const [login, setLogin] = React.useState(true);
  return (
    <Modal onClickBackDrop={props.onCancel}>
      <form className={styles.authBoxWrapper}>
        {props.back}
        <AuthForm
          path={login ? "login" : "signup"}
          modal={true}
          setLogin={setLogin}
        />
      </form>
    </Modal>
  );
});

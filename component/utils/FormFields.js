import React from "react";
import styles from "./FormFields.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function FormFields(props) {
  const [focus, setFocus] = React.useState(false);
  const [displayPassword, setDisplayPassword] = React.useState(true);

  let RightContainer = props.rightIcon;

  if (props.type === "password") {
    RightContainer = (
      <div onClick={() => setDisplayPassword((prevState) => !prevState)}>
        {displayPassword && (
          <VisibilityIcon style={{ color: "grey", fontSize: "2rem" }} />
        )}
        {!displayPassword && (
          <VisibilityOffIcon style={{ color: "grey", fontSize: "2rem" }} />
        )}
      </div>
    );
  }

  return (
    <div
      className={
        focus
          ? `${styles.formFieldContainer} ${styles.formFieldContainer_active}`
          : `${styles.formFieldContainer}`
      }
    >
      {/* icon */}
      <div style={{ color: "grey" }}>{props.leftIcon}</div>
      {/* text input */}
      <div className={styles.textInput}>
        <label className={styles.label}>{props.label}</label>
        <input
          type={
            props.type === "password" && !displayPassword
              ? "password"
              : `$${props.type}`
          }
          placeholder={props.placeholder}
          className={styles.input}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></input>
      </div>
      {RightContainer}
    </div>
  );
}

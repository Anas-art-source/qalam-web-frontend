import React from "react";
import styles from "./FormFields.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function FormFields(props) {
  const [focus, setFocus] = React.useState(false);
  const [userInput, setUserInput] = React.useState();

  React.useEffect(() => {
    props.onChange(userInput);
  }, [userInput]);

  // set the style of form field
  let formFieldStyle = styles.formFieldContainer;
  if (focus) {
    formFieldStyle = `${styles.formFieldContainer} ${styles.formFieldContainer_active}`;
  }
  if (props.error) {
    formFieldStyle = `${styles.formFieldContainer} ${styles.formFieldContainer_active} ${styles.formFieldContainer_error}`;
  }

  // this only deals type is set to "password"
  // this handle the password visibility and icon
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
    <div className={formFieldStyle}>
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
          onChange={(elem) => setUserInput(elem.target.value)}
        ></input>
      </div>
      {RightContainer}
    </div>
  );
}

export default React.memo(FormFields);

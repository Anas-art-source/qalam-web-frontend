import React from "react";
import styles from "./CategoryButton.module.css";
import ClearIcon from "@material-ui/icons/Clear";

export default function CategoryButton(props) {
  const [checked, setChecked] = React.useState(false);
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.addEventListener("change", (e) => {
      setChecked(e.target.checked);
    });
  }, []);

  return (
    <div
      className={
        checked
          ? ` ${styles.categoryButtonWrapper} ${styles.categoryButtonWrapper_checked}`
          : ` ${styles.categoryButtonWrapper}`
      }
    >
      {checked && (
        <ClearIcon style={{ fontSize: "1.3rem", paddingRight: "2px" }} />
      )}
      <input type="checkbox" name="checkbox" id={props.value} ref={inputRef} />
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
}

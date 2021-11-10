import React from "react";
import styles from "./CategoryButton.module.css";
import ClearIcon from "@material-ui/icons/Clear";

function CategoryButton(props) {
  const [checked, setChecked] = React.useState(false);
  const inputRef = React.useRef();
  const [locationParams, setLocationParams] = React.useState([]);

  function currentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return props.onSet([
        position.coords.latitude,
        position.coords.longitude,
        6.21371,
      ]);
    });
  }

  // console.log(locationParams);
  React.useEffect(() => {
    inputRef.current.addEventListener("change", (e) => {
      setChecked(e.target.checked);
      if (e.target.checked) {
        // if there is a geospatial query such as near me
        if (props.slug === "near-me") {
          currentLocation();
        }
        // if there is normal filtering such as categories
        props.onSet(props.slug);
      } else {
        props.onDelete(props.slug);
      }
    });
  }, []);

  return (
    <div
      className={
        checked
          ? ` ${styles.categoryButtonWrapper} ${styles.categoryButtonWrapper_checked}`
          : ` ${styles.categoryButtonWrapper}`
      }
      // onClick={props.onClick(props.value)}
    >
      {checked && (
        <ClearIcon style={{ fontSize: "1.3rem", paddingRight: "2px" }} />
      )}
      <input type="checkbox" name="checkbox" id={props.value} ref={inputRef} />
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
}

export default React.memo(CategoryButton);

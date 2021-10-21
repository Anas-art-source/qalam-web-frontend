import React from "react";
import styles from "./CheckBox.module.css";

// this handles the checkboxes
const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === "add") {
    // if checkbox option already include, this function will remove it as double checked means that it is remove
    if (state.includes(action.value)) {
      return state.filter((x) => x !== action.value);
    }
    // if the checkbox option is not included, it is appended into the state array
    return [...state, action.value];
  }

  if (action.type === "load") {
    return action.value;
  }
};

export default function CheckBox(props) {
  const [checkbox, dispatch] = React.useReducer(reducer, initialState);
  const [checkedOptions, setCheckedOptions] = React.useState();

  // when the checkbox array is changed (either new thing is added or old one is removes), new state will be return to the parent componenent
  React.useEffect(() => {
    props.onChange(checkbox);
  }, [checkbox, props.onChange, props]);

  React.useEffect(() => {
    dispatch({ type: "load", value: props.value });
  }, [props.value]);

  return (
    <div className={styles.checkBoxWrapper}>
      <h3>
        {props.title} {props.required ? "(Required)*" : ""}
      </h3>
      {props.options.map((option) => (
        <div className={styles.checkBoxContainer} key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={(e) => dispatch({ type: "add", value: e.target.value })}
            checked={checkbox.includes(option)}
          />
          <label htmlFor={option}> {option} </label>
        </div>
      ))}
    </div>
  );
}

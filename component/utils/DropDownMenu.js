import React, { memo } from "react";
import styles from "./DropDownMenu.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default memo(function DropDownMenu(props) {
  const [select, setSelect] = React.useState("");
  const [selectArray, setSelectArray] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");
  const [displayOption, setDisplayOption] = React.useState(false);
  const [readOnly, setReadOnly] = React.useState(false);
  const dropdownRef = React.useRef();

  React.useEffect(() => {
    setReadOnly(props.readOnly);

    function handleClick(e) {
      if (!e.path.includes(dropdownRef.current)) setDisplayOption(false);
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  React.useEffect(() => {
    if (props.readOnly) {
      props.onChange(select);
      return;
    }

    props.onChange(selectArray);
    setUserInput((prevState) => selectArray.join("  |  ") + " ");
  }, [select, selectArray]);

  function removeSubject() {
    const arr = selectArray.slice(0, selectArray.length - 1);
    // console.log(arr, "aaa");
    setSelectArray(arr);
  }

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <label>{props.label}</label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder={props.placeholder}
          onClick={() => setDisplayOption(true)}
          value={props.readOnly ? select : userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.code == "Backspace") {
              removeSubject();
            }
          }}
        ></input>

        {readOnly && (
          <div
            className={
              displayOption
                ? styles.arrowWrapper_animation
                : styles.arrowWrapper
            }
          >
            <IoIosArrowDown />
          </div>
        )}
      </div>
      {displayOption && (
        <ul className={styles.optionContainer}>
          {props.options.map((el) => (
            <li
              onClick={(e) => {
                if (props.readOnly) {
                  setSelect(e.target.innerText);
                }

                if (!props.readOnly) {
                  setSelectArray((prevState) => [
                    ...prevState,
                    e.target.innerText,
                  ]);
                }
                setDisplayOption(false);
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

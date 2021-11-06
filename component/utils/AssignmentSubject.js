import React, { memo } from "react";
import TextInput from "../utils/TextInput";
import styles from "./AssignmentSubject.module.css";

const AssignmentSubject = memo((props) => {
  const [assignmentSubjects, setAssignmentSubjects] = React.useState([""]);

  function addMoreHandler(e) {
    e.preventDefault();
    setAssignmentSubjects((prevState) => [...prevState, ""]);
  }

  // this code block will send the assignemnt subject to slide 2
  React.useEffect(() => {
    props.onChange(assignmentSubjects);
  }, [assignmentSubjects]);

  React.useEffect(() => {
    // this if block will only let the props to change the assingment subject if props.value (which is also fetch from the redux store ) to change the state if its length is greater than zero
    // this protect the block base from weird type of bug.
    // in other words, it there is no props.value then there is no need to set assignment array from the outside.
    if (props.value.length > 0) setAssignmentSubjects(props.value);
  }, [props.value]);

  console.log(assignmentSubjects, props.value, "<<<<<<ASSIGNEMT SUBJECTS>>>>>");

  return (
    <div>
      <form>
        {assignmentSubjects.map((el, index) => (
          <TextInput
            type="text"
            value={el}
            label={`Subject/Course ${index + 1}`}
            placeholder="For eg. Principle of Marketing"
            onChange={(subject) =>
              setAssignmentSubjects((prevState) => {
                const arr = Array.from(prevState);
                arr[index] = subject;
                return arr;
              })
            }
          />
        ))}

        <button className={styles.addMoreButton} onClick={addMoreHandler}>
          Add More
        </button>
      </form>
    </div>
  );
});

export default AssignmentSubject;

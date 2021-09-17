import React, { memo } from "react";
import styles from "./ThirdSlide.module.css";

function Subject(props) {
  const [numSubjectArr, setNumSubjectArr] = React.useState([0]);

  React.useEffect(() => {
    for (let i = numSubjectArr.length; i < props.numSubject; i++) {
      setNumSubjectArr((prevState) => [...prevState, i]);
    }
  }, [props.numSubject, setNumSubjectArr, numSubjectArr.length]);

  return (
    <>
      {numSubjectArr.map((i) => (
        <div className={styles.subjectWrapper} key={i}>
          <label>Subject {i + 1}</label>
          <select
            name="stream 1"
            className={styles.selectSubject}
            placeholder="Select Stream"
          >
            <option value="">None</option>
            <option value="O levels">Mathematics</option>
            <option value="O levels">English</option>
            <option value="O levels">Islamiat</option>
            <option value="O levels">Pakistan Studies</option>
            <option value="O levels">Economics</option>
          </select>
        </div>
      ))}
    </>
  );
}

function Stream(props) {
  const [numSubject, setNumSubject] = React.useState(1);

  return (
    <div className={styles.streamWrapper}>
      <label>Stream {props.index + 1}</label>
      <select
        name="stream 1"
        className={styles.select}
        placeholder="Select Stream"
      >
        <option value="">None</option>
        <option value="O levels">O level</option>
        <option value="O levels">A level</option>
        <option value="O levels">Intermediate</option>
        <option value="O levels">Matriculation</option>
        <option value="O levels">AKU Board</option>
      </select>

      <div className={styles.subjectContainer}>
        <div className={styles.subject}>
          <Subject numSubject={numSubject} />
        </div>

        <button
          className={styles.addSubjectBtn}
          onClick={(e) => {
            e.preventDefault();
            setNumSubject((prevState) => prevState + 1);
          }}
        >
          Add More Subject
        </button>
      </div>
    </div>
  );
}

function StreamGenerator(props) {
  const [numStreamArr, setNumStreamArr] = React.useState([0]);

  React.useEffect(() => {
    for (let i = numStreamArr.length; i < props.numStream; i++) {
      setNumStreamArr((prevState) => [...prevState, i]);
      console.log("here");
    }
  }, [props.numStream, setNumStreamArr, numStreamArr.length]);

  return (
    <>
      {numStreamArr.map((i) => (
        <Stream key={i} index={i} />
      ))}
    </>
  );
}

export default memo(function ThirdSlide() {
  const [numStream, setNumStream] = React.useState(1);

  return (
    <form className={styles.formContainer}>
      <StreamGenerator numStream={numStream} />
      <button
        onClick={(e) => {
          e.preventDefault();
          setNumStream((prevState) => prevState + 1);
        }}
      >
        Add More Streams
      </button>
    </form>
  );
});

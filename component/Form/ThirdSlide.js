import React, { memo } from "react";
import styles from "./ThirdSlide.module.css";
import { useSelector } from "react-redux";

// Streams
const streams = [
  "o-levels",
  "a-levels",
  "matriculation",
  "intermediate",
  "AKU board",
  "sat",
  "nat",
];

const olevelSubject = [
  "english",
  "urdu",
  "pakistan studies",
  "islamiat",
  "mathematics",
  "chemistry",
  "physics",
  "addition mathematics",
  "biology",
  "economics",
  "principle of accounts",
  "business",
];

function Subject(props) {
  const [subject, setSubject] = React.useState({});

  React.useEffect(() => {
    // going to stream
    props.onChange(subject);
  }, [subject]);

  return (
    <div className={styles.subjectWrapper}>
      <label>Subject {props.index}</label>
      <select
        name="stream 1"
        className={styles.selectSubject}
        placeholder="Select Stream"
        onChange={(e) =>
          setSubject({
            streamIndex: props.streamIndex,
            index: props.index,
            val: e.target.value,
          })
        }
        value={props.value}
      >
        <option value="">None</option>
        <option value="mathematics">Mathematics</option>
        <option value="english">English</option>
        <option value="islamiat">Islamiat</option>
        <option value="pakistan studies">Pakistan Studies</option>
        <option value="economics">Economics</option>
      </select>
    </div>
  );
}

function Stream(props) {
  const [subArr, setSubArr] = React.useState([
    {
      streamIndex: props.index,
      index: 1,
      val: "",
    },
  ]);

  const [stream, setStream] = React.useState();

  React.useEffect(() => {
    // going to streamGenerator and then to thirdSlide
    props.onChange(stream);
    // going to streamGenerator and then to thirdSlide
    props.onChangeSubject(subArr);
  }, [stream, subArr]);

  React.useEffect(() => {
    if (!props.value.subjects || props.value.subjects.length === 0) return;

    setSubArr(() => {
      const tempArr = props.value.subjects.map((v, i) => {
        return {
          streamIndex: props.value.index,
          index: i + 1,
          val: v,
        };
      });

      return tempArr;
    });
  }, [props.value]);

  console.log(subArr, "SUBJECT ARR ");
  return (
    <div className={styles.streamWrapper}>
      <label>Stream {props.index}</label>
      <select
        name="stream 1"
        className={styles.select}
        placeholder="Select Stream"
        onChange={(e) => {
          const curObj = {
            index: props.index,
            val: e.target.value,
          };
          setStream(curObj);
        }}
        value={props.value.val}
      >
        <option value="">None</option>
        <option value="o levels">O level</option>
        <option value="a levels">A level</option>
        <option value="intermediate">Intermediate</option>
        <option value="matriculation">Matriculation</option>
        <option value="aku board">AKU Board</option>
      </select>

      <div className={styles.subjectContainer}>
        <div className={styles.subject}>
          {subArr.map((obj) => (
            <Subject
              key={obj.index}
              index={obj.index}
              streamIndex={props.index}
              value={obj.val}
              onChange={(obj) => {
                if (!obj || Object.keys(obj).length === 0) return;
                setSubArr((prevState) => {
                  const dArr = [...prevState];
                  dArr[obj.index - 1] = obj;
                  return dArr;
                });
              }}
            />
          ))}
        </div>

        <button
          className={styles.addSubjectBtn}
          onClick={(e) => {
            e.preventDefault();
            setSubArr((prevState) => {
              const last = prevState[prevState.length - 1].index + 1;
              return [
                ...prevState,
                { streamIndex: props.index, index: last, val: "" },
              ];
            });
          }}
        >
          Add More Subject
        </button>
      </div>
    </div>
  );
}

function StreamGenerator(props) {
  return (
    <>
      {props.streamArr.map((sObj) => (
        <Stream
          key={sObj.index}
          index={sObj.index}
          value={sObj}
          onChange={props.onChange}
          onChangeSubject={props.onChangeSubject}
        />
      ))}
    </>
  );
}

export default memo(function ThirdSlide(props) {
  const [streamArr, setStreamArr] = React.useState([
    {
      index: 1,
      val: null,
      subject: [],
    },
  ]);

  const [subject, setSubject] = React.useState([]);

  const [streams, setStreams] = React.useState([
    {
      streamName: "",
      subjects: [],
    },
  ]);

  const formData = useSelector((data) => data.formData);

  console.log(formData, "FORM DATA IN THIRD SLIDE");

  React.useEffect(() => {
    setStreams(formData.streams);
    if (!formData.streams || formData.streams.length === 0) return;

    // console.log(formData.streams, "USE EFFECT");
    setStreamArr(() => {
      const tempArr = formData.streams.map((obj, i) => {
        return { index: i + 1, val: obj.streamName, subjects: obj.subjects };
      });
      return tempArr;
    });
  }, [formData]);

  function prepareStreamsData() {
    const data = streamArr.map((streamObj) => {
      const filterSub = subject.filter(
        (sub) => sub.streamIndex === streamObj.index
      );

      let subjects = [];
      filterSub.forEach((s) => {
        subjects[s.index - 1] = s.val;
      });

      return {
        streamName: streamObj.val,
        subjects: subjects,
      };
    });

    return data;
    // console.log(data);
  }

  React.useEffect(() => {
    const data = prepareStreamsData();
    // console.log(data);
    props.onChange(data);
  }, [streamArr]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <form className={styles.formContainer}>
      <StreamGenerator
        streamArr={streamArr}
        // value={streams}
        onChangeSubject={(arr) =>
          setSubject((prevState) => [...prevState, ...arr])
        }
        onChange={(obj) => {
          if (!obj) return;
          setStreamArr((prevState) => {
            const dArr = [...prevState];
            dArr[obj.index - 1] = obj;
            return dArr;
          });
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setStreamArr((prevState) => {
            const last = prevState[prevState.length - 1].index + 1;
            return [
              ...prevState,
              {
                index: last,
                val: "",
              },
            ];
          });
        }}
      >
        Add More Streams
      </button>

      {/* <button
        onClick={(e) => {
          e.preventDefault();
          prepareStreamsData();
        }}
      >
        click me
      </button> */}
    </form>
  );
});

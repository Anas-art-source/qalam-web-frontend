import React, { memo } from "react";
import styles from "./PostBox.module.css";
import Modal from "./Modal";
import TextArea from "../utils/TextArea";
import GooglePlacesAutoComplete from "./GooglePlacesAutoComplete";
import CheckBox from "./CheckBox";
import CategoryButton from "./CategoryButton";
import useFetch from "../hook/useFetch";

const subjectSuggestion = [
  "O level - Economics",
  "O level - Business Studies",
  "O level - Accounting",
];

const AssignmentForm = memo(() => {
  const [courseName, setCourseName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [compensation, setCompensation] = React.useState("");
  const [deadline, setDeadline] = React.useState("");

  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();
  // console.log(courseName, description, compensation, deadline);

  return (
    <form className={styles.formBox}>
      <div className={styles.titleWrapper}>
        <h3>Post Assignment</h3>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Course name</label>
        <input
          onChange={(e) => setCourseName(e.target.value)}
          className={styles.inputField}
          type="text"
          placeholder="Type course name..."
        ></input>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Description</label>
        <TextArea onChange={setDescription} />
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Compensation</label>

        <div className={styles.feesInputWrapper}>
          <div className={styles.currency}>Rs.</div>
          <input
            className={styles.feesInput}
            type="number"
            onChange={(e) => setCompensation(e.target.value)}
          ></input>
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Deadline</label>
        <input
          type="date"
          data-date-inline-picker="true"
          className={styles.inputField}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.cancelButton}> Cancel</button>
        <button className={styles.submitButton}> Submit</button>
      </div>
    </form>
  );
});

const TutionForm = memo(() => {
  const [educationStream, setEducationStream] = React.useState("");
  const [subjectList, setSubjectList] = React.useState([]);
  const [subjectSuggestion, setSubjectSuggestion] = React.useState([
    "O level - Economics",
    "O level - Business Studies",
    "O level - Accounting",
  ]);

  const [maxDays, setMaxDays] = React.useState("");
  const [minDays, setMinDays] = React.useState("");
  const [fees, setFees] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [teachingMode, setTeachingMode] = React.useState([]);
  const [address, setAddress] = React.useState("");

  function deleteSubjectList(subject) {
    setSubjectList((prevState) => prevState.filter((sub) => sub != subject));
  }

  // console.log(subjectList, "<<<subject List>>>");
  console.log(
    educationStream,
    subjectList,
    maxDays,
    minDays,
    fees,
    description,
    teachingMode,
    address
  );

  return (
    <form className={styles.formBox}>
      <div className={styles.titleWrapper}>
        <h3>Post Tuition</h3>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Choose Educational Stream</label>
        <select
          id="gender"
          // placeholder="Select Your Gender"
          className={styles.field}
          onChange={(e) => setEducationStream(e.target.value)}
        >
          <option value="male"> O levels </option>
          <option value="female"> A levels</option>
        </select>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Choose Subject or Subjects</label>
        <div className={styles.subjectField}>
          {subjectList.map((subject) => (
            <CategoryButton
              key={subject}
              value={subject}
              slug={subject}
              checked={true}
              onSet={(val) => {}}
              onDelete={(val) =>
                setSubjectList((prevState) =>
                  prevState.filter((sub) => sub != val)
                )
              }
            />
          ))}
          <input
            type="text"
            placeholder="Search Subjects Here"
            className={styles.subjectFieldInput}
          ></input>
        </div>
        <div className={styles.categoryWrapper}>
          {subjectSuggestion.map((subject) => {
            if (!subjectList.includes(subject)) {
              return (
                <CategoryButton
                  value={subject}
                  slug={subject}
                  onSet={(val) => {
                    setSubjectList((prevState) => [...prevState, val]);
                  }}
                  onDelete={() => {}}
                />
              );
            }
          })}
        </div>
      </div>

      <label className={styles.fieldHeading}>
        Choose the number of classes per week:
      </label>
      <div className={styles.fieldWrapper_flex}>
        <div>
          <label className={styles.fieldLabel}>Minimum Days</label>
          <select
            id="gender"
            // placeholder="Select Your Gender"
            className={styles.field}
            onChange={(e) => setMinDays(e.target.value)}
          >
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
          </select>
        </div>
        <div>
          <label className={styles.fieldLabel}>Maximum Days</label>
          <select
            id="gender"
            // placeholder="Select Your Gender"
            className={styles.field}
            onChange={(e) => setMaxDays(e.target.value)}
          >
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
          </select>
        </div>
      </div>
      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Fees per month:</label>

        <div className={styles.feesInputWrapper}>
          <div className={styles.currency}>Rs.</div>
          <input className={styles.feesInput} type="number"></input>
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Description</label>
        <TextArea onChange={setDescription} />
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Teaching Mode:</label>

        <div className={styles.categoryWrapper}>
          <CategoryButton
            value="Online"
            slug="Online"
            onSet={(val) => {
              setTeachingMode((prevState) => [...prevState, val]);
            }}
            onDelete={(val) => {
              setTeachingMode((prevState) =>
                prevState.filter((sub) => sub != val)
              );
            }}
          />
          <CategoryButton
            value="Home Tutor"
            slug="Home Tutor"
            onSet={(val) => {
              setTeachingMode((prevState) => [...prevState, val]);
            }}
            onDelete={(val) => {
              setTeachingMode((prevState) =>
                prevState.filter((sub) => sub != val)
              );
            }}
          />
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Address:</label>
        <GooglePlacesAutoComplete
          onLoadLatLng={() => {}}
          onChange={(val) => setAddress(val?.label)}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.cancelButton}> Cancel</button>
        <button className={styles.submitButton}> Submit</button>
      </div>
    </form>
  );
});

const PostBox = memo(() => {
  const [formBoxDisplay, setFormBoxDisplay] = React.useState(false);
  const [displayTuitionForm, setDisplayTuitionForm] = React.useState(false);
  const [displayAssignmentForm, setDisplayAssignmentForm] =
    React.useState(false);

  return (
    <form className={styles.postForm}>
      <div className={styles.avatar}></div>

      <button
        className={styles.postButton}
        onClick={(e) => {
          e.preventDefault();
          setFormBoxDisplay(true);
        }}
      >
        Post a Tuition..
      </button>

      {formBoxDisplay && !displayAssignmentForm && !displayTuitionForm && (
        <Modal onClickBackDrop={setFormBoxDisplay}>
          <div className={styles.optionWrapper}>
            <h2>Select Option</h2>
            <div className={styles.optionButtonWrapper}>
              <div
                className={styles.option}
                onClick={() => setDisplayTuitionForm(true)}
              >
                <h3>Tuition</h3>
              </div>
              <div
                className={styles.option}
                onClick={() => setDisplayAssignmentForm(true)}
              >
                <h3>Assignment</h3>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {formBoxDisplay && displayTuitionForm && (
        <Modal
          onClickBackDrop={(boolean) => {
            setFormBoxDisplay(false);
            setDisplayTuitionForm(false);
          }}
        >
          <TutionForm />
        </Modal>
      )}

      {formBoxDisplay && displayAssignmentForm && (
        <Modal
          onClickBackDrop={(boolean) => {
            setFormBoxDisplay(false);
            setDisplayAssignmentForm(false);
          }}
        >
          <AssignmentForm />
        </Modal>
      )}
    </form>
  );
});

export default PostBox;

import React, { memo } from "react";
import styles from "./PostBox.module.css";
import Modal from "./Modal";
import TextArea from "../utils/TextArea";
import GooglePlacesAutoComplete from "./GooglePlacesAutoComplete";
import CheckBox from "./CheckBox";
import CategoryButton from "./CategoryButton";
import AuthBox from "../AuthBox/AuthBox";
import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import Loading from "../utils/Loading";
import Success from "../utils/Success";
import DropDownMenu from "./DropDownMenu";
import useWindowSize from "../hook/useWindowSize";
import { IoIosArrowDropleft } from "react-icons/io";

const subjectSuggestion = [
  "O level - Economics",
  "O level - Business Studies",
  "O level - Accounting",
];

const AssignmentForm = memo((props) => {
  const [courseName, setCourseName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [compensation, setCompensation] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const { width, height } = useWindowSize();

  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  // console.log(courseName, description, compensation, deadline);

  React.useEffect(
    () => {
      props.isLoading(isLoading);
      props.isValid(isValid);
      props.error(error);
    },
    isLoading,
    isValid,
    error
  );

  async function sendApiRequest() {
    // e.preventDefault();

    const postData = {
      createdAt: Date.now(),
      courseName,
      description,
      compensation,
      deadline,
      type: "assignment",
      user: props.user._id,
    };

    const response = await sendRequest(
      "http://localhost:1000/api/v1/posts",
      "POST",
      postData
    );

    props.onSendRequest();
  }
  return (
    <form className={styles.formBox}>
      <div className={styles.titleWrapper}>
        {width <= 600 && <>{props.back}</>}

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
        <DropDownMenu
          label="Academic Level"
          options={["College Level", "Undergraduate Level", "Master Level"]}
          readOnly={true}
          onChange={() => {}}
        />
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
        <button
          className={styles.cancelButton}
          onClick={(e) => {
            e.preventDefault();
            props.onCancel();
          }}
        >
          {" "}
          Cancel
        </button>
        <button
          className={styles.submitButton}
          onClick={(e) => {
            e.preventDefault();
            sendApiRequest();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
});

const TutionForm = memo((props) => {
  const [educationStream, setEducationStream] = React.useState("");
  const [subjectList, setSubjectList] = React.useState([]);
  const [subjectSuggestion, setSubjectSuggestion] = React.useState([]);

  const [maxDays, setMaxDays] = React.useState("");
  const [minDays, setMinDays] = React.useState("");
  const [fees, setFees] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [teachingMode, setTeachingMode] = React.useState([]);
  const [address, setAddress] = React.useState("");
  const { width, height } = useWindowSize();

  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  React.useEffect(async () => {
    const response = await sendRequest(
      `http://localhost:1000/api/v1/suggestion/subjects/${educationStream}`,
      "GET"
    );

    console.log(response, "responsee");
    if (response && response.message == "successful") {
      setSubjectSuggestion(response.data);
      console.log(response.data, "Subject suggestion");
    }
  }, [educationStream]);

  React.useEffect(
    () => {
      props.isLoading(isLoading);
      props.isValid(isValid);
      props.error(error);
    },
    isLoading,
    isValid,
    error
  );

  console.log(subjectList, "<subjectList>>>");
  function deleteSubjectList(subject) {
    setSubjectList((prevState) => prevState.filter((sub) => sub != subject));
  }

  async function sendApiRequest() {
    const postData = {
      educationStream,
      subject: subjectList,
      maxDays,
      minDays,
      fees,
      description,
      teachingMode,
      address,
      type: "tuition",
      user: props.user._id,
    };

    const response = await sendRequest(
      "http://localhost:1000/api/v1/posts",
      "POST",
      postData
    );

    props.onSendRequest();
  }

  return (
    <form className={styles.formBox}>
      <div className={styles.titleWrapper}>
        {width <= 600 && <>{props.back}</>}
        <h3>Post Tuition</h3>
      </div>

      <div className={styles.fieldWrapper}>
        <DropDownMenu
          readOnly={true}
          label="Select Stream"
          placeholder="Select Stream here..."
          options={[
            "O-levels",
            "A-levels",
            "Intermediate",
            "Matriculation",
            "Aptitude-Test",
          ]}
          onChange={(e) => setEducationStream(e)}
        />
      </div>

      <div className={styles.fieldWrapper}>
        <DropDownMenu
          readOnly={false}
          label="Select Subjects"
          placeholder="type subjects here..."
          options={subjectSuggestion.map((el) => el.subject)}
          onChange={(arr) => setSubjectList(arr)}
        />
        {/* <label className={styles.fieldLabel}>Choose Subject or Subjects</label>
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
        </div> */}
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldHeading}>
          Choose the number of classes per week:
        </label>
        <div className={styles.fieldWrapper_flex}>
          <div>
            <DropDownMenu
              label="Minimum Classes per Week"
              options={[1, 2, 3, 4, 5, 6, 7]}
              placeholder="Choose Number of Classes"
              readOnly={true}
              onChange={(e) => setMinDays(e)}
            />
          </div>

          <div>
            <DropDownMenu
              label="Maximum Classes per Week"
              options={[1, 2, 3, 4, 5, 6, 7]}
              placeholder="Choose Number of Classes"
              readOnly={true}
              onChange={(e) => setMaxDays(e)}
            />
          </div>
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Fees per month:</label>

        <div className={styles.feesInputWrapper}>
          <div className={styles.currency}>Rs.</div>
          <input
            className={styles.feesInput}
            type="number"
            onChange={(e) => setFees(e.target.value)}
          ></input>
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Description</label>
        <TextArea onChange={setDescription} />
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.fieldLabel}>Address:</label>
        <GooglePlacesAutoComplete
          onLoadLatLng={() => {}}
          onChange={(val) => setAddress(val?.label)}
        />
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

      <div className={styles.buttonWrapper}>
        <button className={styles.cancelButton} onClick={props.onCancel}>
          {" "}
          Cancel
        </button>
        <button
          className={styles.submitButton}
          onClick={(e) => {
            e.preventDefault();
            sendApiRequest();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
});

const PostBox = memo(() => {
  const [formBoxDisplay, setFormBoxDisplay] = React.useState(false);
  const [displayTuitionForm, setDisplayTuitionForm] = React.useState(false);
  const [displayAssignmentForm, setDisplayAssignmentForm] =
    React.useState(false);

  // test code
  const [isLoading, setIsLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [sendRequest, setSendRequest] = React.useState(false);
  const { width, height } = useWindowSize();

  console.log(isLoading, isValid, error, "<<<POST BOX>>>");

  const BackButton = (
    <div>
      <IoIosArrowDropleft
        style={{ fontSize: "3rem" }}
        onClick={() => {
          setFormBoxDisplay(false);
          setDisplayAssignmentForm(false);
          setDisplayTuitionForm(false);
        }}
      />
    </div>
  );

  React.useEffect(() => {
    if (sendRequest) setFormBoxDisplay(false);
  }, sendRequest);

  // for localStorage and persisting the user login
  const user = useSelector((data) => data.user);

  // if (!user.login) return <AuthBox />;

  return (
    <form className={styles.postForm}>
      {/* <div className={styles.avatar}></div> */}
      {user.login && (
        <Avatar size="extraSmall" loader="qalam" src={user.userPicture} />
      )}
      {!user.login && (
        <img
          src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
          className={styles.avatarPlaceholder}
        />
      )}
      <button
        className={styles.postButton}
        onClick={(e) => {
          e.preventDefault();
          setFormBoxDisplay(true);
        }}
      >
        Post a Tuition..
      </button>

      {sendRequest && isLoading && (
        <Modal onClickBackDrop={setSendRequest}>
          <Loading />
        </Modal>
      )}
      {sendRequest && isValid && (
        <Modal onClickBackDrop={setSendRequest}>
          <Success success={true} />
        </Modal>
      )}
      {sendRequest && !isValid && error && (
        <Modal onClickBackDrop={setSendRequest}>
          <Success success={false} />
        </Modal>
      )}

      {formBoxDisplay &&
        !displayAssignmentForm &&
        !displayTuitionForm &&
        user.login && (
          <Modal onClickBackDrop={setFormBoxDisplay}>
            {width <= 600 && (
              <div
                className={styles.backHeader}
                onClick={() => setFormBoxDisplay(false)}
              >
                {BackButton}
                <p>Back</p>
              </div>
            )}
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
      {formBoxDisplay && displayTuitionForm && user.login && (
        <Modal
          onClickBackDrop={(boolean) => {
            setFormBoxDisplay(false);
            setDisplayTuitionForm(false);
          }}
        >
          <TutionForm
            isLoading={setIsLoading}
            isValid={setIsValid}
            error={setError}
            user={user}
            back={BackButton}
            onCancel={() => {
              setFormBoxDisplay(false);
              setDisplayTuitionForm(false);
              setFormBoxDisplay(false);
            }}
            onSendRequest={() => {
              setSendRequest(true);
              setDisplayTuitionForm(false);
              setFormBoxDisplay(false);
            }}
          />
        </Modal>
      )}
      {formBoxDisplay && displayAssignmentForm && user.login && (
        <Modal
          onClickBackDrop={(boolean) => {
            setFormBoxDisplay(false);
            setDisplayAssignmentForm(false);
          }}
        >
          <AssignmentForm
            isLoading={setIsLoading}
            isValid={setIsValid}
            error={setError}
            back={BackButton}
            user={user}
            sendRequest={setSendRequest}
            onCancel={() => {
              setFormBoxDisplay(false);
              setDisplayAssignmentForm(false);
            }}
            onSendRequest={() => {
              setSendRequest(true);
              setDisplayAssignmentForm(false);
              setFormBoxDisplay(false);
            }}
          />
        </Modal>
      )}
      {formBoxDisplay && !user.login && (
        <AuthBox onCancel={setFormBoxDisplay} back={BackButton} />
      )}
    </form>
  );
});

export default PostBox;

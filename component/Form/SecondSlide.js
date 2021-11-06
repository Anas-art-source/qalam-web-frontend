import React, { memo } from "react";
import styles from "./SecondSlide.module.css";
import TextInput from "../utils/TextInput";
import SelectInput from "../utils/SelectInput";
import MapBox from "../utils/MapBox";

import Radio from "../utils/Radio";
import ImageUpload from "../utils/ImageUpload";
import CheckBox from "../utils/CheckBox";
import GooglePlacesAutoComplete from "../utils/GooglePlacesAutoComplete";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import AssignmentSubject from "../utils/AssignmentSubject";

function CerticateView(props) {
  console.log(props.certArr, "CERT ARR");

  return (
    <>
      {props.certArr.map((i) => (
        <div key={i} className={styles.certContainer}>
          <TextInput
            label={`Certificate ${i + 1} Name`}
            placeholder="Google Marketing Analytics"
          />

          {/* <div className={styles.uploadContainer}>
            <ImageUpload label={`Certificate ${i + 1}`} onChange={() => {}} />
          </div> */}
        </div>
      ))}
    </>
  );
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default memo(function SecondSlide(props) {
  const [instituteName, setInstituteName] = React.useState("");
  const [CGPA, setCGPA] = React.useState("");
  const [eduStream, setEduStream] = React.useState("");
  const [percentageMatric, setPercentageMatric] = React.useState("");
  const [percentageIntermediate, setPercentageIntermediate] =
    React.useState("");
  const [gradeOlevels, setGradeOlevels] = React.useState("");
  const [gradeAlevels, setGradeAlevels] = React.useState("");
  const [experienceYear, setExperienceYear] = React.useState(0);
  const [experienceSchool, setExperienceSchool] = React.useState("");
  const [specialisation, setSpecialisation] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [teachingMode, setTeachingMode] = React.useState([]);
  const [homeBasedLocation, setHomeBasedLocation] = React.useState({
    type: "Point",
    latitude: 0,
    longitute: 0,
  });
  // const [physicalTeachingLocations, setPhysicalTeachingLocations] =
  // React.useState([]);

  console.log(eduStream, "educational stream");

  const [certificateView, setCertificateView] = React.useState(false);
  const [certArr, setCertArr] = React.useState([]);
  const [physicalTeachingLocationArr, setPhysicalTeachingLocationArr] =
    React.useState([]);
  const [assignmentSubjects, setAssignmentSubjects] = React.useState([""]);

  console.log(assignmentSubjects, "<<<ASSIGNMENT SUBJECTS IN SECOND SLIDE");

  const formData = useSelector((data) => data.formData);

  function deleteLocationHandler(i) {
    setPhysicalTeachingLocationArr((prevState) => {
      return prevState.filter((s, index) => index !== i);
    });
  }

  React.useEffect(() => {
    const data = {
      instituteName,
      CGPA,
      educationStream: eduStream,
      percentageMatric,
      percentageIntermediate,
      gradeOlevels,
      gradeAlevels,
      experienceYear,
      experienceSchool,
      specialisation,
      address,
      teachingMode,
      physicalTeachingLocations: physicalTeachingLocationArr,
      assignmentSubjects,
      homeBasedLocation: {
        type: "Point",
        coordinates: [homeBasedLocation.longitude, homeBasedLocation.latitude],
      },
    };

    props.onChange(data);
    // console.log(teachingMode.length);
    if (eduStream && address && teachingMode.length > 0) {
      return props.setSecondSlideValid(true);
    } else {
      props.setSecondSlideValid(false);
    }
  }, [
    instituteName,
    CGPA,
    eduStream,
    percentageMatric,
    percentageIntermediate,
    gradeOlevels,
    gradeAlevels,
    experienceYear,
    experienceSchool,
    specialisation,
    address,
    teachingMode,
    physicalTeachingLocationArr,
    homeBasedLocation,
    assignmentSubjects,
  ]);

  React.useEffect(() => {
    console.log(formData.teachingMode, "FORM DATA Teaching mode");

    setInstituteName(formData.instituteName);
    setCGPA(formData.CGPA);
    setEduStream(formData.educationStream);
    setPercentageMatric(formData.percentageMatric);
    setPercentageIntermediate(formData.percentageIntermediate);
    setGradeOlevels(formData.gradeOlevels);
    setGradeAlevels(formData.gradeAlevels);
    setExperienceYear(formData.experienceYear);
    setExperienceSchool(formData.experienceSchool);
    setSpecialisation(formData.specialisation);
    setAddress(formData.address);
    setTeachingMode(formData.teachingMode);
    setPhysicalTeachingLocationArr(formData.physicalTeachingLocations);
    setHomeBasedLocation(formData.homeBasedLocation);
  }, [formData]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <form className={styles.formContainer}>
      <h2>Addition Information</h2>
      <TextInput
        type="text"
        label="Name of Your University/College"
        placeholder="for eg. Institute of business administration"
        onChange={setInstituteName}
        value={instituteName}
        required={true}
      />
      <TextInput
        type="number"
        label="CGPA"
        placeholder="for eg. 3.5"
        onChange={setCGPA}
        value={CGPA}
      />
      <div className={styles.radioContainer}>
        {/* <Radio
          options={[
            "O Levels",
            "A Levels",
            "Matriculation",
            "Intermediate",
            "AKU Board",
            "Edexcel",
          ]}
          name="Education-Stream"
          title="Education Stream"
          onChange={setEduStream}
          value={eduStream}
          required={true}
        /> */}

        <CheckBox
          options={["O levels", "A levels", "Matriculations", "Intermediate"]}
          name="Education-Stream"
          title="Education Stream"
          onChange={setEduStream}
          value={formData.educationStream}
          required={true}
        />
      </div>
      {eduStream.includes("O levels") && (
        <>
          <TextInput
            type="text"
            label="Grades in O levels"
            placeholder="for eg. 5A* and 2Bs"
            onChange={setGradeOlevels}
            value={gradeOlevels}
            required={true}
          />
        </>
      )}
      {eduStream.includes("A levels") && (
        <>
          <TextInput
            type="text"
            label="Grades in A levels"
            placeholder="for eg. 2A*"
            onChange={setGradeAlevels}
            value={gradeAlevels}
            required={true}
          />
        </>
      )}

      {eduStream.includes("Matriculations") && (
        <>
          <TextInput
            type="text"
            label="percentage in Matriculation"
            placeholder="for eg. 75%"
            onChange={setPercentageMatric}
            value={percentageMatric}
            required={true}
          />
        </>
      )}

      {eduStream.includes("Intermediate") && (
        <>
          <TextInput
            type="text"
            label="Percentage in Intermediate"
            placeholder="for eg. 80%"
            onChange={setPercentageIntermediate}
            value={percentageIntermediate}
            required={true}
          />
        </>
      )}

      <TextInput
        type="number"
        label="Experience (in year)"
        placeholder="for eg. 4 years"
        onChange={setExperienceYear}
        value={experienceYear}
      />
      <TextInput
        type="text"
        label="Did you teach in any school or college before? If Yes, enter the name of that school or college."
        placeholder="For eg. Happy Palace Grammer School"
        onChange={setExperienceSchool}
        value={experienceSchool}
      />
      <TextInput
        type="text"
        label="Specialisation"
        placeholder="For eg. Mathematics"
        onChange={setSpecialisation}
        value={specialisation}
      />
      <TextInput
        type="text"
        label="Address"
        placeholder="For eg. Street 109, Nasheet Society, Block 12, Karachi"
        onChange={setAddress}
        value={address}
        required={true}
      />
      <div className={styles.radioContainer}>
        <CheckBox
          options={["Online", "Physical", "Home-based", "Assignment Helper"]}
          name="teaching-mode"
          title="Teaching Mode"
          onChange={setTeachingMode}
          value={formData.teachingMode}
          required={true}
        />
      </div>
      {teachingMode.includes("Physical") && (
        <div className={styles.mapContainer}>
          <h3> Select all areas you want to teach at: </h3>
          <GooglePlacesAutoComplete
            onLoadLatLng={setPhysicalTeachingLocationArr}
          />
          {physicalTeachingLocationArr.map((obj, i) => (
            <div className={styles.locationNamePlate} key={i}>
              <h4>{obj.label}</h4>
              <FaTimes
                fontSize="inherit"
                onClick={() => deleteLocationHandler(i)}
              />
            </div>
          ))}
          <MapBox
            locationArr={physicalTeachingLocationArr}
            deleteLocationHandler={deleteLocationHandler}
          />
        </div>
      )}
      {teachingMode.includes("Home-based") && (
        <div className={styles.mapContainer}>
          <h3> Select Your Home Location: </h3>
          {/* <GooglePlacesAutoComplete onLoadLatLng={setLocationArr} /> */}
          <MapBox
            // locationArr={locationArr}
            currentLocation={true}
            onChangeHomeLocation={(data) => setHomeBasedLocation(data)}
          />
        </div>
      )}

      {/* Assignment subject name */}

      {teachingMode.includes("Assignment Helper") && (
        <>
          <h2 className={styles.header}>Assignment Subjects</h2>
          <AssignmentSubject
            onChange={(assignmentSubArr) =>
              setAssignmentSubjects(assignmentSubArr)
            }
            value={formData.assignmentSubjects}
          />
        </>
      )}

      {/* Certificate container */}
      {/* <div className={styles.certificateContainer}>
        {!certificateView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setCertificateView(true);
            }}
          >
            Add Certificates
          </button>
        )}

        {certificateView && (
          <>
            <CerticateView certArr={certArr} />
            <button
              onClick={(e) => {
                e.preventDefault();
                setCertArr((prevState) => {
                  const last = prevState[prevState.length - 1]
                    ? prevState[prevState.length - 1] + 1
                    : 1;
                  return [...prevState, last];
                });
              }}
            >
              Add More Certificates
            </button>
          </>
        )}
      </div> */}
    </form>
  );
});

// {!certificateView && (
//   <button onClick={() => setCertificateView(true)}>
//     Add Certificates
//   </button>
// )}

// {certificateView && (
// <>
//   <CerticateView certificateCount={certificateCount} />
//   <button
//     onClick={(e) => {
//       e.preventDefault();
//       setCertificateCount((prevState) => prevState + 1);
//     }}
//   >
//     Add More Certificates
//   </button>
// </>
// )}

import React, { memo } from "react";
import styles from "./SecondSlide.module.css";
import TextInput from "../utils/TextInput";
import SelectInput from "../utils/SelectInput";
import MapBox from "../utils/MapBox";

import Radio from "../utils/Radio";
import ImageUpload from "../utils/ImageUpload";
import CheckBox from "../utils/CheckBox";

function CerticateView(props) {
  const [Arr, setArr] = React.useState([]);

  React.useEffect(() => {
    // appends the Arr
    // if there is any increase only incremental value is append -> this is why i = Arr.length is used
    // it prevent same value being added again and again
    for (let i = Arr.length; i < props.certificateCount; i++) {
      setArr((prevState) => [...prevState, i]);
    }
  }, [props.certificateCount, setArr, Arr.length]);

  return (
    <>
      {Arr.map((i) => (
        <div key={i} className={styles.certContainer}>
          <TextInput
            label={`Certificate ${i + 1} Name`}
            placeholder="Google Marketing Analytics"
          />

          <div className={styles.uploadContainer}>
            <ImageUpload label={`Certificate ${i + 1}`} />
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(function SecondSlide() {
  const [eduStream, setEduStream] = React.useState("");
  const [certificateView, setCertificateView] = React.useState(false);
  const [certificateCount, setCertificateCount] = React.useState(1);

  console.log(eduStream, "edu");

  return (
    <form className={styles.formContainer}>
      <h2>Addition Information</h2>
      <TextInput
        type="text"
        label="Name of Your University/College"
        placeholder="for eg. Institute of business administration"
      />

      <TextInput type="number" label="CGPA" placeholder="for eg. 3.5" />

      <div className={styles.radioContainer}>
        <Radio
          options={[
            "O/A levels",
            "Matric/Intermediate",
            "AKU Board",
            "Edexcel",
          ]}
          name="Education-Stream"
          title="Education Stream"
          onChange={setEduStream}
        />
      </div>

      {eduStream === "o/a levels" && (
        <>
          <TextInput
            type="text"
            label="Grades in O levels"
            placeholder="for eg. 5A* and 2Bs"
          />
          <TextInput
            type="text"
            label="Grades in A levels"
            placeholder="for eg. 2A*"
          />
        </>
      )}

      {eduStream === "matric/intermediate" && (
        <>
          <TextInput
            type="text"
            label="percentage in Matriculation"
            placeholder="for eg. 75%"
          />
          <TextInput
            type="text"
            label="Percentage in Intermediate"
            placeholder="for eg. 80%"
          />
        </>
      )}

      <TextInput
        type="number"
        label="Experience (in year)"
        placeholder="for eg. 4 years"
      />

      <TextInput
        type="text"
        label="Did you teach in any school or college before? If Yes, enter the name of that school or college."
        placeholder="For eg. Happy Palace Grammer School"
      />

      <TextInput
        type="text"
        label="Specialisation"
        placeholder="For eg. Mathematics"
      />

      <TextInput
        type="text"
        label="Address"
        placeholder="For eg. Street 109, Nasheet Society, Block 12, Karachi"
      />

      <div className={styles.radioContainer}>
        <CheckBox
          options={["Online", "Physical", "Home-based"]}
          name="teaching-mode"
          title="Teaching Mode"
          onChange={setEduStream}
        />
      </div>

      <div className={styles.mapContainer}>
        <h3> Teaching Area </h3>
        <MapBox />
      </div>

      <div className={styles.certificateContainer}>
        {!certificateView && (
          <button onClick={() => setCertificateView(true)}>
            Add Certificates
          </button>
        )}

        {certificateView && (
          <>
            <CerticateView certificateCount={certificateCount} />
            <button
              onClick={(e) => {
                e.preventDefault();
                setCertificateCount((prevState) => prevState + 1);
              }}
            >
              Add More Certificates
            </button>
          </>
        )}
      </div>
    </form>
  );
});

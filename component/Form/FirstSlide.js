import React, { memo } from "react";
import styles from "./FirstSlide.module.css";
import TextInput from "../utils/TextInput";
import TextArea from "../utils/TextArea";
import ImageUpload from "../utils/ImageUpload";
import { useSelector } from "react-redux";

export default memo(function FirstSlide(props) {
  // name, cnic, text area, cnic picutures 2, display pictures, cover pictures, introduction video
  const [name, setName] = React.useState("");
  const [CNIC, setCNIC] = React.useState();
  const [description, setDescription] = React.useState();
  const [CNICpictures, setCNICpictures] = React.useState([]);
  const [displayPicture, setDisplayPicture] = React.useState([]);
  const [coverPicture, setCoverPicture] = React.useState([]);
  const [contactNumber, setContactNumber] = React.useState("");
  const [introductionVideo, setIntroductionVideo] = React.useState("");

  // taking the formData on mount and populating the field
  // it is useful when client navigate back and forth in the form
  const formData = useSelector((data) => data.formData);
  const user = useSelector((data) => data.user);

  React.useEffect(() => {
    const data = {
      name,
      cnicNumber: CNIC,
      description,
      CNICpictures,
      userPicture: displayPicture,
      coverPicture: coverPicture,
      introductionVideo,
      contactNumber,
    };

    props.onChange(data);

    // controls whether form can be proceed or not
    if (name && CNIC && CNICpictures && introductionVideo && contactNumber) {
      return props.setFirstSlideValid(true);
    } else {
      props.setFirstSlideValid(false);
    }
  }, [
    name,
    CNIC,
    description,
    CNICpictures,
    displayPicture,
    coverPicture,
    introductionVideo,
    contactNumber,
  ]);

  React.useEffect(() => {
    setName(formData.name || user.name);
    setCNIC(formData.cnicNumber);
    setDescription(formData.description);
    setCNICpictures(formData.CNICpictures);
    setDisplayPicture(formData.displayPicture || user.userPicture);
    setCoverPicture(formData.coverPicture);
    setIntroductionVideo(formData.introductionVideo);
    setContactNumber(formData.contactNumber);
  }, [formData, user]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <form className={styles.formContainer}>
      <h3>Personal Information</h3>

      <div className={styles.nameContainer}>
        {/* <TextInput
          label="Name"
          placeholder="for eg. Anas Khan"
          type="text"
          required={true}
          onChange={setName}
          value={name}
        /> */}

        <div>
          <h2 className={styles.inputHeader}>Name (Required)*</h2>
          <h2 className={styles.input}>{user.name}</h2>
        </div>

        <TextInput
          label="CNIC Number"
          placeholder="42111-5555-645"
          type="text"
          required={true}
          onChange={setCNIC}
          value={CNIC}
        />
      </div>

      <div className={styles.descriptionContainer}>
        <TextArea
          label="Describe yourself"
          onChange={setDescription}
          value={description}
        />
      </div>

      <TextInput
        label="Contact Number"
        placeholder="for eg, 0349-1834975"
        type="text"
        required={true}
        onChange={setContactNumber}
        value={contactNumber}
      />

      <TextInput
        label="Youtube Introduction Video Link"
        placeholder="for eg, https://www.youtube.com/watch?v=1Rs2ND1ryYc"
        type="text"
        required={true}
        onChange={setIntroductionVideo}
        value={introductionVideo}
      />

      <div className={styles.uploadWrapper}>
        <div className={styles.uploadContainer}>
          <h3> Upload CNIC Pictures (Front and back both) (Required)* </h3>
          <ImageUpload
            maxSize={2}
            minSize={2}
            label="CNIC"
            onChange={setCNICpictures}
            value={formData.CNICpictures}
          />
        </div>

        {/* <div className={styles.uploadContainer}>
          <h3> Upload Display Picture </h3>
          <ImageUpload
            maxSize={1}
            minSize={1}
            label="Display"
            onChange={setDisplayPicture}
            value={formData.userPicture}
          />
        </div> */}

        <div className={styles.uploadContainer}>
          <h3> Upload Cover Picture</h3>
          <ImageUpload
            maxSize={1}
            minSize={1}
            label="Cover"
            onChange={setCoverPicture}
            value={formData.coverPicture}
          />
        </div>
      </div>
    </form>
  );
});

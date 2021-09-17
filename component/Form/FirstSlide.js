import React, { memo } from "react";
import styles from "./FirstSlide.module.css";
import TextInput from "../utils/TextInput";
import TextArea from "../utils/TextArea";
import ImageUpload from "../utils/ImageUpload";

export default memo(function FirstSlide() {
  return (
    <form className={styles.formContainer}>
      <h3>Personal Information</h3>

      <div className={styles.nameContainer}>
        <TextInput label="Name" placeholder="for eg. Anas Khan" type="text" />
        <TextInput
          label="CNIC Number"
          placeholder="42111-5555-645"
          type="number"
        />
      </div>

      <div className={styles.descriptionContainer}>
        <TextArea label="Describe yourself" />
      </div>

      <div className={styles.uploadWrapper}>
        <div className={styles.uploadContainer}>
          <h3> Upload CNIC Pictures (Front and back both) </h3>
          <ImageUpload maxSize={2} minSize={2} label="CNIC" />
        </div>

        <div className={styles.uploadContainer}>
          <h3> Upload Display Picture </h3>
          <ImageUpload maxSize={1} minSize={1} label="Display" />
        </div>

        <div className={styles.uploadContainer}>
          <h3> Upload Cover Picture</h3>
          <ImageUpload maxSize={1} minSize={1} label="Cover" />
        </div>
      </div>
    </form>
  );
});

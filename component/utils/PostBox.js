import React, { memo } from "react";
import styles from "./PostBox.module.css";
import Modal from "./Modal";
import TextArea from "../utils/TextArea";
import GooglePlacesAutoComplete from "./GooglePlacesAutoComplete";
import CheckBox from "./CheckBox";
import CategoryButton from "./CategoryButton";

const PostBox = memo(() => {
  const [formBoxDisplay, setFormBoxDisplay] = React.useState(false);

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

      {formBoxDisplay && (
        <Modal onClickBackDrop={setFormBoxDisplay}>
          <form className={styles.formBox}>
            <div className={styles.titleWrapper}>
              <h3>Post Tuition and Assignment</h3>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.fieldLabel}>
                Choose Educational Stream
              </label>
              <select
                id="gender"
                // placeholder="Select Your Gender"
                className={styles.field}
              >
                <option value="male"> O levels </option>
                <option value="female"> A levels</option>
              </select>
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
                >
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="7"> 7 </option>
                </select>
              </div>
              <div>
                <label className={styles.fieldLabel}>Maximum Days</label>
                <select
                  id="gender"
                  // placeholder="Select Your Gender"
                  className={styles.field}
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
              <TextArea onChange={() => {}} />
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.fieldLabel}>Teaching Mode:</label>

              <div className={styles.categoryWrapper}>
                <CategoryButton
                  value="Online"
                  onSet={() => {}}
                  onDelete={() => {}}
                />
                <CategoryButton
                  value="Home Tutor"
                  onSet={() => {}}
                  onDelete={() => {}}
                />
              </div>
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.fieldLabel}>Address:</label>
              <GooglePlacesAutoComplete onLoadLatLng={() => {}} />
            </div>
          </form>
        </Modal>
      )}
    </form>
  );
});

export default PostBox;

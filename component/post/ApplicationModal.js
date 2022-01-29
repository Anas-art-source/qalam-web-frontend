import React from "react";
import Modal from "../utils/Modal";
import TextArea from "../utils/TextArea";
import TextInputV2 from "../utils/TextInputV2";
import styles from "./PostCard.module.css";

function ApplicationModal(props) {
  const [bid, setBid] = React.useState("");
  const [compensation, setCompensation] = React.useState();

  return (
    <Modal onClickBackDrop={props.onClickBackDrop}>
      <div className={styles.applicationModal}>
        <div className={styles.applicationModal_header}>
          <h1>Application Form</h1>
        </div>
        <div className={styles.applicationModal_formWrapper}>
          <div className={styles.applicationModal_formWrapper_textAreaWrapper}>
            <label>Write your bid</label>
            <TextArea onChange={setBid} />
          </div>
          <TextInputV2
            label="Fees/Compensation"
            onChange={setCompensation}
            type="compensation"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => {
              props.onApply(
                props.tuitionid,
                props.recieverEmail,
                bid,
                compensation
              );
              props.onClickBackDrop(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ApplicationModal;

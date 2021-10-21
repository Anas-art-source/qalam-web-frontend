import React from "react";
import styles from "./ImageUpload.module.css";
import { IoMdCloudUpload, IoIosClose } from "react-icons/io";

function PictureViewer(props) {
  const [filesUrlArray, setFilesUrlArray] = React.useState([]);

  React.useEffect(() => {
    let arrayTemp = [];
    props.filesArray.forEach((file) => {
      const url = URL.createObjectURL(file);
      arrayTemp.push(url);
    });

    setFilesUrlArray(arrayTemp);
    arrayTemp = [];
  }, [props.filesArray]);

  return (
    <div className={styles.imageContainer}>
      {filesUrlArray.map((url) => (
        <div className={styles.imageWrapper} key={url}>
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default function ImageUpload(props) {
  const fileRealBtnRef = React.useRef();
  // const [file, setFile] = React.useState();
  const [error, setError] = React.useState(false);
  const [filesArray, setFilesArray] = React.useState([]);

  function chooseFileHandler(e) {
    e.preventDefault();
    fileRealBtnRef.current.click();
  }

  function uploadFileHandler() {
    // console.log(fileRealBtnRef.current.files.length, "fileeess");

    if (fileRealBtnRef.current.files.length > props.maxSize) {
      return setError(`Only ${props.maxSize} Photos are allowed`);
    }

    if (fileRealBtnRef.current.files.length < props.minSize) {
      return setError(`Must Have atleast ${props.minSize} photos`);
    }

    // setFilesArray(fileRealBtnRef.current.files);
    let arrayTemp = [];
    for (let i = 0; i < props.maxSize; i++) {
      arrayTemp.push(fileRealBtnRef.current.files[i]);
    }

    setFilesArray(arrayTemp);
    arrayTemp = [];
    // console.log(fileArray, "FILE ARRAY DUMMY");
  }

  // sending file to the parent component
  React.useEffect(() => {
    props.onChange(filesArray);
  }, [filesArray]);

  // taking files from the parent and updating file array
  React.useEffect(() => {
    if (!props.value) return;
    console.log(props.value);
    setFilesArray(props.value);
  }, []);

  return (
    <div className={styles.imageUploadContainer}>
      <div className={styles.imageUploadViewer}>
        {filesArray.length === 0 && (
          <>
            <div className={styles.uploadIcon}>
              <IoMdCloudUpload fontSize="inherit" color="inherit" />
            </div>

            <p>No {props.label} Chosen, yet!</p>

            {/* <div className={styles.closeContainer}>
        <IoIosClose fontSize="inherit" color="inherit" />
      </div> */}
          </>
        )}

        {filesArray.length > 0 && <PictureViewer filesArray={filesArray} />}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <input
        type="file"
        className="defaultButton"
        hidden
        ref={fileRealBtnRef}
        onChange={uploadFileHandler}
        multiple
        size={props.maxSize}
      />
      <button className={styles.customButton} onClick={chooseFileHandler}>
        Choose {props.label} Picture
      </button>
    </div>
  );
}

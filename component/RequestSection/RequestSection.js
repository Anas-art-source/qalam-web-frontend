import React, { memo } from "react";
import styles from "./RequestSection.module.css";
import RequestCard from "./RequestCard";
import LoadingPage from "../LoadingPage/LoadingPage";

export default memo(function RequestSection(props) {
  if (props.requestData.length == 0) return <LoadingPage />;
  return (
    <div className={styles.sectionWrapper}>
      {props.requestData.map((data) => (
        <RequestCard data={data} />
      ))}
    </div>
  );
});

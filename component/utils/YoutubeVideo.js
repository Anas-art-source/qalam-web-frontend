import React from "react";
import styles from "./YoutubeVideo.module.css";
import ReactPlayer from "react-player";
import useWindowSize from "../hook/useWindowSize";

function YoutubeVideo(props) {
  return (
    <div className={styles.youtubeVideoContainer}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={props.width || "100%"}
        height={props.height || "100%"}
        controls={true}
      />
    </div>
  );
}

export default React.memo(YoutubeVideo);
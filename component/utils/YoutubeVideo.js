import React from "react";
import styles from "./YoutubeVideo.module.css";
import ReactPlayer from "react-player";

function YoutubeVideo() {
  return (
    <div className={styles.youtubeVideoContainer}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}

export default React.memo(YoutubeVideo);

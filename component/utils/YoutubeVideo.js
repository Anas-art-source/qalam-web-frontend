import React from "react";
import styles from "./YoutubeVideo.module.css";
import ReactPlayer from "react-player";

export default function YoutubeVideo() {
  return (
    <div className={styles.youtubeVideoContainer}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        controls={true}
      />
    </div>
  );
}

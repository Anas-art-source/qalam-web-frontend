import React, { memo } from "react";
import Image from "next/image";

export default memo(function CoverImage(props) {
  let myLoader;
  if (props.loader === "unsplash") {
    myLoader = ({ src, width, quality }) => {
      return `${props.src}?w=${props.width}&q=${props.quality || 75}`;
    };
  }

  if (props.loader === "qalam") {
    myLoader = ({ src, width, quality }) => {
      return `${props.src}?w=${props.width}&q=${props.quality || 75}`;
    };
  }

  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <Image
        loader={myLoader}
        src={props.src}
        width={900}
        height={300}
        layout="responsive"
        alt="coverImage"
      />
    </div>
  );
});

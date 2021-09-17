import React, { memo } from "react";
import styles from "./AddReview.module.css";
import Image from "next/image";
import useWindowSize from "../hook/useWindowSize";

export default memo(function Avatar(props) {
  const [profilePicDynamicSize, setProfilePicDynamicSize] =
    React.useState("large");

  const [sizeInPx, setSizeInPx] = React.useState(0);

  const { width } = useWindowSize();

  React.useEffect(() => {
    // if window width is greater tham 1300px and it is profile picture
    // OR if size is large
    if ((width >= 1300 && props.profilePic) || props.size === "large") {
      setSizeInPx(250);
    }

    // if window width is greater less than 1300px and greater than 1000 px and it is profile picture
    // or if size is medium
    if (
      (width >= 550 && (width < 1300) & props.profilePic) ||
      props.size === "medium"
    ) {
      setSizeInPx(160);
    }

    // if window width is greater less 1000 px and it is profile picture
    // or if size is small
    if ((width < 550 && props.profilePic) || props.size === "small") {
      setSizeInPx(120);
    }

    if (props.size === "extraSmall") {
      setSizeInPx(50);
    }

    if (!props.profilePic) return;
  }, [width, props.profilePic, props.size]);

  let myLoader;
  if (props.loader === "unsplash") {
    myLoader = ({ src, width, quality }) => {
      return `${props.src}?w=${props.width}&q=${props.quality || 75}`;
    };
  }

  return (
    <div
      style={{
        width: ` ${sizeInPx}px`,
        height: `${sizeInPx}px`,
        borderRadius: "100%",
        backgroundColor: "white",
        border: "1px solid black",
        overflow: "hidden",
      }}
    >
      <Image
        loader={myLoader}
        src={props.src}
        alt="universe"
        width={sizeInPx}
        height={sizeInPx}
        objectFit="contain"
        layout="responsive"
      />
    </div>
  );
});

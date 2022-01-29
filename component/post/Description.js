import React, { memo } from "react";
import styles from "./PostCard.module.css";

function Description(props) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className={styles.description}>
      {!showMore && props.description.split(" ").length > 50 && (
        <p
          className={styles.description}
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description.split(" ").splice(0, 50).join(" ") + "..."}
          <button>show more</button>
        </p>
      )}

      {showMore && props.description.split(" ").length > 50 && (
        <p
          className={styles.description}
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description}
          {/* <button>show less</button> */}
        </p>
      )}

      {props.description.split(" ").length < 50 && (
        <p
          className={styles.description}
          //  onClick={() => setShowMore((prevState) => !prevState)}
        >
          {props.description}
          {/* <button>show less</button> */}
        </p>
      )}
    </div>
  );
}

export default Description;

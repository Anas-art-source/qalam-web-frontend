import React from "react";
import styles from "./Filter.module.css";
import CategoryButton from "./CategoryButton";
import RadioWithComponent from "../utils/RadioWithComponent";
import CloseIcon from "@material-ui/icons/Close";
import { useRouter } from "next/router";

const RadioButtonProps = [
  { value: 4.5, label: "4.5 and above" },
  { value: 4, label: "4 and above" },
  { value: 3.5, label: "3.5 and above" },
  { value: 3, label: "3 and above" },
  { value: 2.5, label: "2.5 and above" },
  { value: 2.5, label: "2.5 and below" },
];

function Filter(props) {
  const [query, setQuery] = React.useState([]);
  const [distance, setDistance] = React.useState("");
  const [ratingQuery, setRatingQuery] = React.useState("");
  const router = useRouter();

  console.log(query, distance, ratingQuery);

  function sendQuery() {
    let queryCat;
    let queryDistance;
    let queryRating;
    if (query.length > 0) {
      queryCat = query.join(",");
    }

    if (distance) {
      queryDistance = `${distance}`;
    }

    if (ratingQuery) {
      queryRating = `${ratingQuery}`;
    }

    console.log(query, distance, ratingQuery, queryCat, "QUERY ON SEND");

    router.push({
      pathname: "/all",
      query: {
        categories: queryCat,
        distance: queryDistance,
        rating: queryRating,
      },
    });
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.categoryDisplay}>
        <div
          className={styles.closeContainer}
          onClick={() => props.setFilterActive(false)}
        >
          <CloseIcon />
        </div>

        <div className={styles.filterHeaderContainer}>
          <h3>Categories</h3>

          {/* for now, clear all just reload the page. later it must remove the query object along will unchecking the filter buttons */}
          <button
            className={styles.clearAllButton}
            onClick={() => router.reload()}
          >
            Clear All
          </button>
        </div>
        <div className={styles.categoryDisplayContainer}>
          <CategoryButton
            value="Home Tutors"
            slug="Physical"
            onSet={(val) => setQuery((prevState) => [...prevState, val])}
            onDelete={(val) =>
              setQuery((prevState) => prevState.filter((q) => q != val))
            }
          />
          <CategoryButton
            value="Online Tutors"
            slug="Online"
            onSet={(val) => setQuery((prevState) => [...prevState, val])}
            onDelete={(val) =>
              setQuery((prevState) => prevState.filter((q) => q != val))
            }
          />
          <CategoryButton
            value="Home-based Tutors"
            slug="Home-based" // need to check here
            onSet={(val) => setQuery((prevState) => [...prevState, val])}
            onDelete={(val) =>
              setQuery((prevState) => prevState.filter((q) => q != val))
            }
          />
          <CategoryButton
            value="Assignment Helpers"
            slug="assignment-helper"
            onSet={(val) => setQuery((prevState) => [...prevState, val])}
            onDelete={(val) =>
              setQuery((prevState) => prevState.filter((q) => q != val))
            }
          />
        </div>
      </div>

      <div className={styles.categoryDisplay}>
        <h3>Distance / Location</h3>
        <div className={styles.categoryDisplayContainer}>
          <CategoryButton
            value="Near Me"
            slug="near-me"
            onSet={(val) => setDistance(val)}
            onDelete={(val) => setDistance("")}
          />
        </div>
      </div>

      <div className={styles.categoryDisplay}>
        <h3>Rating</h3>
        <div className={styles.categoryDisplayContainer}>
          <RadioWithComponent
            radioOptionsArray={RadioButtonProps}
            onSet={(val) => setRatingQuery(val)}
          />
        </div>
      </div>

      <button onClick={sendQuery} className={styles.applyButton}>
        Apply filters
      </button>
    </div>
  );
}

export default React.memo(Filter);

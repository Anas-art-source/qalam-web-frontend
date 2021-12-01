import React from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import useFetch from "../hook/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";

function Searchbar() {
  const [searchSuggestion, setSearchSuggestion] = React.useState([]);
  const { sendRequest, isLoading, isValid, setError, error, setIsValid } =
    useFetch();

  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  // dynamically update the placeholder and sending request for the relevant teaching mode or category
  const routeObj = {
    "/home-tutors": "Physical",
    "/homebased-tutors": "Home-based",
    "/assignment-helper": "Assignment Helper",
    "/all": false,
  };

  const category = routeObj[router.pathname];

  // this useEffect function handles the visibility of the search suggestion box
  React.useEffect(() => {
    //  this handles the display of the suggestion box. It click happens outside the form div (ref) then the suggestion box is closed
    function handleClick(event) {
      // console.log(event);
      console.log(event.path.includes(ref), event.path, ref);
      if (event.path.includes(ref.current)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [searchSuggestion]);

  async function onType(input) {
    // console.log(router);
    // Online, Home-based, Physical, and Assignment Helper

    console.log(category, "<<<>>>>");

    let response;

    if (category) {
      response = await sendRequest(
        `http://localhost:1000/api/v1/teacher/suggestion?name=${input}?&teachingMode=${category}`,
        "GET"
      );
    } else {
      response = await sendRequest(
        `http://localhost:1000/api/v1/teacher/suggestion?name=${input}`,
        "GET"
      );
    }

    if (response?.message == "successful") {
      setSearchSuggestion(response.data);
    }

    // console.log(response);
  }

  return (
    <form className={styles.searchContainer} ref={ref}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder={
            category
              ? `Search ${category}...`
              : "Search Home Tutors, Assignment Helpers and other ..."
          }
          onChange={(e) => onType(e.target.value)}
        />

        <div className={styles.suggestion_box}>
          {isVisible &&
            searchSuggestion.map((suggestion) => (
              <Link href={`${router.pathname}/${suggestion.slug}`}>
                {/* //wrap a tag with Link */}
                <a onClick={(e) => console.log("clickedd")}>
                  {suggestion.name}
                </a>
              </Link>
            ))}
        </div>
      </div>
      <button type="submit">
        <SearchIcon fontSize="inherit" />
      </button>
    </form>
  );
}

export default React.memo(Searchbar);

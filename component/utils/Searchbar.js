import React from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "@material-ui/icons/Search";

function Searchbar() {
  return (
    <form className={styles.searchContainer}>
      <input type="text" placeholder="Search here..." />
      <button type="submit">
        <SearchIcon fontSize="inherit" />
      </button>
    </form>
  );
}

export default React.memo(Searchbar);

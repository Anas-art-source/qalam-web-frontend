import React from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Searchbar() {
  return (
    <form className={styles.searchContainer}>
      <input type="text" placeholder="Search here..." />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

import React, { useState } from "react";
import styles from './SearchBar.module.css'


const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const onHandleChange = (e) => {
    const value = e.target.value;

    setQuery(value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <input type="text" value={query} name="query" onChange={onHandleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

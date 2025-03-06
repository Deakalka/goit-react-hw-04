import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from 'react-icons/fi';

import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = value.trim();
    if (!query.length) {
      toast.error("Please, enter your query");
      return;
    }
    onSubmit(query);
  };
  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">
          <FiSearch size="16px"/>Search 
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
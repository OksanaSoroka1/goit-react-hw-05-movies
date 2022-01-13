import { useState, useEffect } from 'react';
import css from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Write something');
      return;
    }
    onSubmit(search);
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        onChange={handleChange}
        name="film"
        value={search}
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};
export { SearchBar };

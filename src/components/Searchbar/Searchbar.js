import { useState } from 'react';
import css from './Searchbar.module.css';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInput = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={css.SearchBar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          className={css.SearchFormInput}
          type="text"
          value={query}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}></span>🔍
        </button>
      </form>
    </header>
  );
}

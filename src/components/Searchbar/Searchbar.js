import { useState } from 'react';
import css from './Searchbar.styled.css';

export function Searchbar({ onSubmit }) {
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
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>🔍</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          value={query}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
          placeHolder="Search images and photos"
        />
      </form>
    </header>
  );
}

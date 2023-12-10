import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <input
            className={css['SearchForm-Input']}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css['SearchForm-Button']}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

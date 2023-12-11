// import css from './Searchbar.module.css';
import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
  SearchbarStyled,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitQuery }) => {
  const submitQuery = e => {
    e.preventDefault();
    const {
      query: { value: queryValue },
    } = e.target.elements;
    onSubmitQuery(queryValue.toLowerCase());
  };

  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={submitQuery}>
        <SearchInputStyled
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchButtonStyled type="submit">Search</SearchButtonStyled>
      </SearchFormStyled>
    </SearchbarStyled>
  );
};

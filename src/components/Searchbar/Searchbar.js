// import css from './Searchbar.module.css';
import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
  SearchbarStyled,
} from './Searchbar.styled';

export const Searchbar = ({ textQuery, onSubmitQuery }) => {
  const submitQuery = e => {
    e.preventDefault();
    const {
      query: { value },
    } = e.target.elements;

    const queryValue = value.trim().toLowerCase();

    if (queryValue === '') {
      return alert('PLEASE, ENTER QUERY!');
    }

    if (queryValue === textQuery) {
      return alert(
        'Повторний запрос, перезавантажте сторінку або введіть інший запрос'
      );
    }

    onSubmitQuery(queryValue);
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

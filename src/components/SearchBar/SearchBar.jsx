import { Searchbar, Input, SubmitButton } from './SearchBar.styled';
import propTypes from 'prop-types';

const SearchBar = ({ search, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={evt => onChange(evt.target.value)}
        />
      </Searchbar>
      <SubmitButton type="submit">Search</SubmitButton>
    </>
  );
};

SearchBar.propTypes = {
  search: propTypes.string,
  onChange: propTypes.func,
};

export default SearchBar;

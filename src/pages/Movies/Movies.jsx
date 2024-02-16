import {
  Main,
  Searchbar,
  Input,
  SubmitButton,
  MovieList,
  MovieItem,
  MovieLink,
} from './Movies.styled';

const Movies = () => {
  return (
    <Main>
      <Searchbar>
        <Input></Input>
        <SubmitButton>Search</SubmitButton>
      </Searchbar>
      <MovieList>
        <MovieItem>
          <MovieLink></MovieLink>
        </MovieItem>
      </MovieList>
    </Main>
  );
};
export default Movies;

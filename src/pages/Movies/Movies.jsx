import React, { useEffect, useState } from 'react';

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
  const [search, setSearch] = useState('');
  const handleInput = evt => {
    setSearch(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const trimInput = evt.target.elements.query.value.trim();
    onSubmit(trimInput);
    evt.target.reset();
  };
  return (
    <Main>
      <Searchbar onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          id="search"
          placeholder="Search images and photos"
          value={search}
          onChange={handleInput}
        />
        <SubmitButton type="submit">Search</SubmitButton>
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

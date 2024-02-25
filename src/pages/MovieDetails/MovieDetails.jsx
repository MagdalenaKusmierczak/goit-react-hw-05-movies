import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'Service/API/Api';
import Loader from 'Service/Loader/Loader';

import {
  BackButton,
  Main,
  Section,
  Title,
  Overview,
  Genres,
  Paragraph,
  List,
  ListItem,
  StyledLink,
  Image,
  DescriptionWrapper,
  MovieWrapper,
  Genre,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLocation = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setDetails(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!details) {
    return <Loader />;
  }

  return (
    <>
      <Main>
        <Link to={goBackLocation.current}>
          <BackButton>Go back</BackButton>
        </Link>
        <MovieWrapper>
          <Image
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
          <DescriptionWrapper>
            <Title>{details.title}</Title>
            <Paragraph>User Score: {details.vote_average}</Paragraph>
            <Overview>Overview </Overview>
            <Paragraph>{details.overview}</Paragraph>
            <Genres>Genres</Genres>
            <Paragraph>
              {details.genres.map(genre => (
                <Genre key={genre.id}> {genre.name}</Genre>
              ))}
            </Paragraph>
          </DescriptionWrapper>
        </MovieWrapper>
      </Main>
      <Section>
        <Paragraph>Additional info</Paragraph>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};
export default MovieDetails;

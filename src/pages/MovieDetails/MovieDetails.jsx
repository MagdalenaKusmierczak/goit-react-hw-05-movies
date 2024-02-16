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
} from './MovieDetails.styled';

const MovieDetails = () => {
  return (
    <>
      <Main>
        <BackButton>Go back</BackButton>
        <MovieWrapper>
          <Image></Image>
          <DescriptionWrapper>
            <Title></Title>
            <Paragraph>User Score: </Paragraph>
            <Overview>Overview</Overview>
            <Paragraph></Paragraph>
            <Genres>Genres</Genres>
            <Paragraph></Paragraph>
          </DescriptionWrapper>
        </MovieWrapper>
      </Main>
      <Section>
        <Paragraph>Additional info</Paragraph>
        <List>
          <ListItem>
            <StyledLink>Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink>Reviews</StyledLink>
          </ListItem>
        </List>
      </Section>
    </>
  );
};
export default MovieDetails;

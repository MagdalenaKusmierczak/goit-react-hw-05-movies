import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Service/API/Api';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { Wrapper, Header } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header>Trending today</Header>
      <TrendingMoviesList movies={trendingMovies} />
    </Wrapper>
  );
};
export default Home;

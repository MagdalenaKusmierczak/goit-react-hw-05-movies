import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'Service/API/Api';
import CastList from 'components/CastList/CastList';
import { Warning } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setCastList(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {castList.length !== 0 && <CastList cast={castList} />}
      {castList.length === 0 && (
        <Warning>We don't have any cast for this movie.</Warning>
      )}
    </>
  );
};
export default Cast;

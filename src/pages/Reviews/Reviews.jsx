import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Service/API/Api';
import { Warning } from './Reviews.styled';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviewsList(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviewsList.length !== 0 && <ReviewsList reviews={reviewsList} />}
      {reviewsList.length === 0 && (
        <Warning>We don't have any reviews for this movie.</Warning>
      )}
    </>
  );
};
export default Reviews;

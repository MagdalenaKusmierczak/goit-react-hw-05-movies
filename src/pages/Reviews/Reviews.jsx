import { ReviewList, ReviewAuthor, ReviewItem, Review } from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewList>
      <ReviewItem>
        <ReviewAuthor>Author: </ReviewAuthor>
        <Review></Review>
      </ReviewItem>
    </ReviewList>
  );
};
export default Reviews;

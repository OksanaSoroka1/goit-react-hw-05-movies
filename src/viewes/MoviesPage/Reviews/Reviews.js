import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsSearchApi } from '../../../api/api';
import { ReviewsList } from '../../../components/Reviews/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  useEffect(() => {
    reviewsSearchApi(params.movieId)
      .then(responce => setReviews(responce))
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ReviewsList reviewsArr={reviews} />
      ) : (
        <p>Nothing was founded</p>
      )}
    </section>
  );
};
export default Reviews;

import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
  
	const [first, second] = reviews
	const firstTwoReviews = [first, second]

	return (
		<>
			{firstTwoReviews.map((review) => (
				<div key={review.name} >
					<ReviewItem
						name={review.name}
						rating={review.rating}
						review={review.review}
					/>
				</div>
			))}
		</>
	);
};

export default Reviews;

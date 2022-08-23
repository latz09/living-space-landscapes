import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	const [first, second] = reviews;
	const firstTwoReviews = [first, second];

	return (
		<div className='grid lg:grid-cols-2 gap-8 py-8 '>
			{firstTwoReviews.map((review) => (
				<div key={review.name}>
					<ReviewItem
						name={review.name}
						rating={review.rating}
						review={review.review}
					/>
				</div>
			))}
		</div>
	);
};

export default Reviews;

import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<div className="grid gap-5 my-7">
			{reviews.map((review) => (
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

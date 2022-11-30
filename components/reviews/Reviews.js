import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';
const Reviews = () => {
	return (
		<div className='grid gap-8 mx-4 xl:grid-cols-2 xl:gap-16'>
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

import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';
const Reviews = () => {
	return (
		<div className='grid lg:grid-cols-2 place-items-center gap-8 py-8 lg:h-[60vh] '>
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

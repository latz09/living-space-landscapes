import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
    
	return (
		<>
			{reviews.map((review) => (
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

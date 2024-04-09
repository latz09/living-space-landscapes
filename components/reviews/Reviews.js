import { reviews } from '../../data/reviews';
import FadeUpWrapper from '../utils/wrapper-animations/FadeUpWrapper';
import ReviewItem from './ReviewItem';
import SocialReviewSectionLinks from '../../components/utils/SocialReviewSectionLinks';

const Reviews = () => {
	return (
		<>
			<FadeUpWrapper>
				<div className='grid gap-12 px-4 xl:grid-cols-2 xl:gap-16 max-w-7xl mx-auto py-8'>
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
				
			</FadeUpWrapper>
		
		</>
	);
};
export default Reviews;

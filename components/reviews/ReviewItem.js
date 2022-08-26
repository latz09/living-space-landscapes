import StarGenerator from './StarGenerator';
const ReviewItem = ({ name, rating, review }) => {
	return (
		<>
			<div className='prose grid justify-items-center max-w-2xl mx-auto p-6  text-landscape-700 '>
				<div className='grid gap-3'>
					<div className='flex items-center justify-between'>
						<span className='font-bold tracking-wider'>{name}</span>
					</div>
					<StarGenerator rating={rating} />
					<span className='review-text'>{review}</span>
				</div>
			</div>
		</>
	);
};
export default ReviewItem;

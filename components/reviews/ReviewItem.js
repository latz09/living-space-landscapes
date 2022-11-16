import StarGenerator from './StarGenerator';
const ReviewItem = ({ name, rating, review }) => {
	return (
		<>
			<div className='prose  text-landscape-700 '>
				<div className='grid gap-2'>
					<div className='grid gap-1'>
						<span className='font-bold tracking-wider'>{name}</span>
						<StarGenerator rating={rating} />
					</div>
					
					<span className='review-text'>{review}</span>
				</div>
			</div>
		</>
	);
};
export default ReviewItem;

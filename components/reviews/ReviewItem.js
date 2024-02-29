import StarGenerator from './StarGenerator';
const ReviewItem = ({ name, rating, review }) => {
	return (
		<>
			<div className=' text-landscape-700 '>
				<div className='grid gap-2 place-items-center'>
					<div className='flex items-center gap-4'>
						<span className='font-bold text-lg lg:text-xl '>{name}</span>
						<StarGenerator rating={rating} />
					</div>
					
					<p className='text-dark text-center lg:text-xl leading-7'>{review}</p>
				</div>
			</div>
		</>
	);
};
export default ReviewItem;

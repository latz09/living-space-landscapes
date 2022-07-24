import { useState } from 'react';
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs';

const ReviewItem = ({ name, rating, review }) => {
	const [showOverflow, setShowOverflow] = useState(false);
	return (
		<div className='prose grid justify-items-center border max-w-2xl mx-auto p-6 shadow-md text-landscape-700'>
			<div className='grid gap-3'>
				<div className='flex items-center justify-between'>
					<span className='font-bold tracking-wider'>{name}</span>
					<span className=' p-1 px-2  border rounded-full shadow-md'>{`;)`}</span>
				</div>
				<span>{rating}</span>
				<span
					className={`${
						!showOverflow
							? 'review-text overflow-hidden max-h-52'
							: 'review-text transition duration-1000'
					}`}
				>
					{review}
				</span>
			</div>
			<div className="text-3xl py-4">
				<button
					onClick={() => {
						setShowOverflow(!showOverflow);
					}}
				>
					{!showOverflow ? <BsArrowBarDown /> : <BsArrowBarUp />}
				</button>
			</div>
		</div>
	);
};

export default ReviewItem;

// global css  for review classes
//if showoverflow true classes are all from global and overflow-none h-full

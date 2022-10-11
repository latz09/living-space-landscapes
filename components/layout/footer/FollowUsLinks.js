import { AiFillInstagram } from 'react-icons/ai';
import { SiHouzz } from 'react-icons/si';

const FollowUsLinks = () => {
	return (
		<div className='flex space-x-4 sm:space-x-0 py-7 sm:py-0 sm:grid gap-5 text-landscape-700 tracking-widest'>
			

			<a
				href='https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/living-space-landscapes-pfvwus-pf~1510288630/__public'
				target='_blank.'
				rel='noreferrer'
				className='grid grid-cols-2 place-items-center'
			>
				<span className='text-xl md:text-2xl text-landscape-700'>
					<SiHouzz />
				</span>
				<span className="">houzz</span>
			</a>
			<a
				href='https://www.instagram.com/livingspacelandscapesmn/'
				target='_blank.'
				rel='noreferrer'
				className='grid grid-cols-2  place-items-center'
			>
				<span className='text-2xl md:text-3xl text-landscape-700'>
					<AiFillInstagram />{' '}
				</span>
				<span className="">instagram</span>
			</a>
		</div>
	);
};

export default FollowUsLinks;

import { FiFacebook } from 'react-icons/fi';
import { SiHouzz } from 'react-icons/si';

const FollowUsLinks = () => {
	return (
		<div className='flex space-x-4 sm:space-x-0 py-2 sm:py-0 sm:grid gap-5 text-landscape-700 tracking-widest'>
			

			<a
				href='https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/living-space-landscapes-pfvwus-pf~1510288630/__public'
				target='_blank.'
				rel='noreferrer'
				className='flex items-center space-x-3 w-full pl-1'
			>
				<span className='text-xl md:text-2xl text-landscape-700'>
					<SiHouzz />
				</span>
				<span>houzz</span>
			</a>
			<a
				href='https://www.facebook.com/livingspacelandscapes/'
				target='_blank.'
				rel='noreferrer'
				className='flex items-center space-x-3'
			>
				<span className='text-2xl md:text-3xl text-landscape-700'>
					<FiFacebook />{' '}
				</span>
				<span>facebook</span>
			</a>
		</div>
	);
};

export default FollowUsLinks;

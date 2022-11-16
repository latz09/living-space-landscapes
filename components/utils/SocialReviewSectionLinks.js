import { AiFillInstagram } from 'react-icons/ai';
import { SiHouzz } from 'react-icons/si';

const SocialReviewSectionLinks = () => {
	const houzzLink =
		'https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/living-space-landscapes-pfvwus-pf~1510288630/__public';
	const instagramLink = 'https://www.instagram.com/livingspacelandscapesmn/';

	return (
		<div className=' text-landscape-700 text-xl tracking-widest grid gap-2'>
			<div className='flex justify-center space-x-4 lg:space-x-8'>
				<a
					href={houzzLink}
					target='_blank.'
					rel='noreferrer'
					className='text-3xl md:text-3xl hover:text-landscape-300 transition duration-700'
				>
					<SiHouzz />
				</a>
				<a
					href={instagramLink}
					target='_blank.'
					rel='noreferrer'
					className='text-4xl md:text-4xl  hover:text-landscape-300 transition duration-700 '
				>
					<AiFillInstagram />{' '}
				</a>
			</div>{' '}
			<div className='text-landscape-700 text-base md:text-2xl font-log italic fnt-bold text-center'>
				Follow us to check out our latest projects and photos!
			</div>
		</div>
	);
};

export default SocialReviewSectionLinks;

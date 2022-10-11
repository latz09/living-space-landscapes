import { AiFillInstagram } from 'react-icons/ai';
import { SiHouzz } from 'react-icons/si';

const SocialReviewSectionLinks = () => {
    
	const houzzLink =
		'https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/living-space-landscapes-pfvwus-pf~1510288630/__public';
	const instagramLink = 'https://www.instagram.com/livingspacelandscapesmn/';

	return (
		<div className='  transition duration-700 px-4 py-7  text-landscape-700 grid gap-4 place-items-center  text-xl  tracking-widest '>
			<div className=' grid grid-cols-2 gap-3 '>
				<a
					href={houzzLink}
					target='_blank.'
					rel='noreferrer'
					className='text-xl md:text-3xl hover:text-landscape-300 transition duration-700'
				>
					<SiHouzz />
				</a>
				<a
					href={instagramLink}
					target='_blank.'
					rel='noreferrer'
					className='text-2xl md:text-4xl  hover:text-landscape-300 transition duration-700 '
				>
					<AiFillInstagram />{' '}
				</a>
			</div>{' '}
			<div className='text-gray-50 text-2xl font-logo font-bold'>
				Follow us to check out our latest projects and photos!
			</div>
		</div>
	);
};

export default SocialReviewSectionLinks;

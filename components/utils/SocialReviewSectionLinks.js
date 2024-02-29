import { AiFillInstagram } from 'react-icons/ai';
import { SiHouzz } from 'react-icons/si';

const SocialReviewSectionLinks = () => {
	const houzzLink = 'https://www.houzz.com/pro/livingspacelandscapes/__public';
	const instagramLink = 'https://www.instagram.com/livingspacelandscapesmn/';

	return (
		
			<div className='  text-xl font-logo grid gap-6 '>
				<div className='text- text-base md:text-3xl text-center'>
					Follow us to check out our latest projects and photos!
				</div>
				<div className='text-landscape-700  text-4xl flex justify-center space-x-4 lg:space-x-8'>
					<a
						href={houzzLink}
						target='_blank.'
						rel='noreferrer'
						className=''
					>
						<SiHouzz />
					</a>
					<a
						href={instagramLink}
						target='_blank.'
						rel='noreferrer'
						className=' '
					>
						<AiFillInstagram />{' '}
					</a>
				</div>{' '}
				
			</div>
	);
};

export default SocialReviewSectionLinks;

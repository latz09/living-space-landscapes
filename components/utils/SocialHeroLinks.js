import { AiFillInstagram } from 'react-icons/ai';
import { SiHouzz } from 'react-icons/si';

const SocialHeroLinks = () => {
	const houzzLink =
		'https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/living-space-landscapes-pfvwus-pf~1510288630/__public';
	const instagramLink = 'https://www.instagram.com/livingspacelandscapesmn/';

	return (
		<div className=' bg-opacity-20  py-3 rounded-full hover:bg-opacity-80 hover:shadow-lg transition duration-700 text-landscape-700 grid gap-4 place-items-center mx-2 text-xl font-bold tracking-widest mt-2'>
			<div className=' grid grid-cols-2 gap-3 '>
				<a
					href={houzzLink}
					target='_blank.'
					rel='noreferrer'
					className='text-xl md:text-3xl hover:text-landscape-700 transition duration-700'
				>
					<SiHouzz />
				</a>
				<a
					href={instagramLink}
					target='_blank.'
					rel='noreferrer'
					className='text-2xl md:text-4xl  hover:text-landscape-700 transition duration-700 '
				>
					<AiFillInstagram />{' '}
				</a>
			</div>{' '}
			{/* <div className='text-gray-200'>
				Follow us to check out our latest projects and photos!
			</div> */}
		</div>
	);
};

export default SocialHeroLinks;

import Image from 'next/image';
import heroImage from '../../../public/images/webp/living-space-landscapes.webp';
import logo from '../../../public/images/webp/living-space-landscape.webp';
import ContactButton from '../../utils/ContactBtn';

const Hero = () => {
	return (
		<div className='relative w-full h-[70vh] lg:h-[80vh]'>
			<Image
				src={heroImage}
				alt='Landscaping around a patio setting'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				priority='true'
			/>
			<div className='relative grid place-items-center h-full bg-black bg-opacity-60'>
				<div className='lg:w-1/2 max-w-3xl'>
					<Image
						src={logo}
						alt='Living Landscapes Logo'
						layout='intrinsic'
						priority='true'
					/>
				</div>
				<div className='lg:hidden border-b-2 text-white font-long border-landscape-700 border-opacity-40 hover:border-opacity-100 transition duration-700 hover:opacity-70 '>
					<ContactButton />
				</div>
			</div>
		</div>
	);
};
export default Hero;

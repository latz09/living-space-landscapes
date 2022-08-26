import Image from 'next/image';
import heroImage from '../../../public/images/webp/logoHero.webp';
import logo from '../../../public/images/logos/logo.png';
const Hero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<Image
				src={heroImage}
				alt='Landscaping around a patio setting'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				priority='true'
			/>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='lg:w-1/2 max-w-3xl'>
					<Image
						src={logo}
						alt='Living Landscapes Logo'
						layout='intrinsic'
						priority='true'
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;

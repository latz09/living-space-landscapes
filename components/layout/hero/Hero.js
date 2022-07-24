import Image from 'next/image';
import heroImage from '../../../public/images/yards/full-yard-display.jpg';
import ButtonLink from '../../utils/ButtonLink';
const Hero = () => {
	return (
		<div className='relative h-full z-0 '>
			<Image src={heroImage} alt='' layout='intrinsic' />
			<div className='absolute inset-0 z-10 sm:flex hidden sm:justify-end sm:items-center sm:mr-12 sm:mt-12 '>
				{/* <ButtonLink
					title='Set up Consultation'
					href={'/contact'}
					styles={
						'border-2 hover:opacity-95  hover:bg-landscape-300 shadow-md shadow-black'
					}
				/> */}
			</div>
		</div>
	);
};

export default Hero;

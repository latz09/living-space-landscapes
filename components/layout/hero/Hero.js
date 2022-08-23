import Image from 'next/image';
import heroImage from '../../../public/images/yards/patio-red-chairs.jpg';
import logo from '../../../public/images/logos/logo.png'
// import ButtonLink from '../../utils/ButtonLink';

const Hero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<div className='-z-10  '>
				<Image
					src={heroImage}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority='true'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='lg:w-1/2 max-w-3xl px-4'>
					<Image src ={logo} alt='' layout='intrinsic' />				
				</div>

			</div>
		</div>
	);
};

export default Hero;


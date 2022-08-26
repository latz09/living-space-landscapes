import Image from 'next/image';
import heroImage from '../../../public/images/gallery-images/11.jpg';
import logo from '../../../public/images/logos/logo.png';

const Hero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<div className='z-10'>
				<Image
					src={heroImage}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority='true'
					placeholder='blur'
					width={200}
					height={200}
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='lg:w-1/2 max-w-3xl'>
					<div className="h-full w-full">
						<Image src={logo} alt='' layout='intrinsic' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

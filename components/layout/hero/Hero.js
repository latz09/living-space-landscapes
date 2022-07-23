import Image from 'next/image';
import heroImage from '../../../public/images/yards/full-yard-display.jpg';

const Hero = () => {
	return (
		<div className="flex justify-center shadow-lg py-1 sm:p-1 md:p-2 border-x border-b border-landscape-500 ">
			<Image src={heroImage} alt='' layout='intrinsic' />
		</div>
	);
};

export default Hero;

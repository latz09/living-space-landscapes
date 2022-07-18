import Image from 'next/image';
import heroImage from '../../../public/images/yards/full-yard-display.jpg';

const Hero = () => {
	return (
		<div>
			
				<Image src={heroImage} alt='' layout='intrinsic' />
			
		</div>
	);
};

export default Hero;

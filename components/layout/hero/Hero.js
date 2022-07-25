import Image from 'next/image';
import heroImage from '../../../public/images/yards/full-yard-display.jpg';
import ButtonLink from '../../utils/ButtonLink';
const Hero = () => {
	return (
		<div className=''>
			<Image src={heroImage} alt='' layout='intrinsic' />
		</div>
	);
};

export default Hero;

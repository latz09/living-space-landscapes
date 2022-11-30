import Image from 'next/image';
import heroImage from '../../../public/images/webp/living-space-landscapes.webp';
import logo from '../../../public/images/webp/living-space-landscape.webp';
import ContactButton from '../../utils/ContactBtn';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='relative w-full  h-[45vh] md:h-[70vh]'>
			<Image
				src={heroImage}
				alt='Landscaping around a patio setting'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				priority='true'
			/>
			<div className='relative grid  h-full bg-black bg-opacity-60'>
				<div className='grid place-items-center'>
					<div className=''>
						<div className=' max-w-3xl'>
							<Image
								src={logo}
								alt='Living Landscapes Logo'
								layout='intrinsic'
								priority='true'
							/>
						</div>
						<motion.div className='lg:hidden border-b-2 text-landscape-700 font-long border-landscape-300 mr-1 ml-2 border-opacity-40 hover:border-opacity-100 transition duration-700 hover:opacity-80 '>
							<ContactButton />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;

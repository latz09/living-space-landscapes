import Image from 'next/image';
import { motion } from 'framer-motion';

const PageHero = ({ heroImage, heroTitle }) => {
	return (
		<div className='relative w-full h-[45vh] md:h-[70vh] shadow-lg shadow-landscape-700/30'>
			<Image
				src={heroImage}
				alt=''
				priority={true}
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div0 className='relative flex justify-center items-center h-full bg-gradient-to-b from-dark/10 via-dark/80 to-dark/10'>
				<div className='grid gap-4 text-center '>
					<motion.h1
						className='text-5xl md:text-7xl font-logo text-landscape-700'
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{delay:.4, duration: 1.6}}
					>
						{heroTitle}
					</motion.h1>
				</div>
			</div0>
		</div>
	);
};

export default PageHero;

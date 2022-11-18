import Image from 'next/image';
import { motion } from 'framer-motion';

const PageHero = ({ heroImage, heroTitle, viewPortHeight }) => {
	return (
		<div className={`relative w-full h-[${viewPortHeight}vh]`}>
			<Image
				src={heroImage}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div0 className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
				<div className='grid gap-4 text-center tracking-widest text-gray-50'>
					<motion.h1
						className='text-5xl md:text-7xl font-logo text-landscape-500'
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

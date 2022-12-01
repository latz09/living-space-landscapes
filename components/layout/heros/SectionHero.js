import Image from 'next/image';
import ButtonLink from '../../utils/ButtonLink';
import { motion } from 'framer-motion';

const SectionHero = ({ bgImage, title, linkTo, buttonText, description }) => {
	return (
		<div className='relative w-full h-[40vh] lg:h-[70vh]  tracking-widest text-white/80'>
			<Image
				src={bgImage}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black/60 grid place-items-center'>
				<motion.div className='max-w-7xl grid gap-4 md:gap-6'>
					<div className='grid gap-2 text-center'>
						<motion.h1
							initial={{ opacity: 0, scale: 0.96 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2, duration: 1.2 }}
							className='tracking-wider text-5xl md:text-6xl lg:text-7xl text-landscape-500 '
						>
							{title}
						</motion.h1>

						<motion.div
							className='text-base sm:text-lg lg:text-2xl px-2 mx-auto font-bold md:font-normal tracking-widest italic'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.8, duration: 1.4 }}
						>
							{description}
						</motion.div>
					</div>
					<motion.div
						initial={{ scale: 0.993 }}
						whileInView={{ scale: 1 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
						className=' w-1/2 md:w-3/5 mx-auto shadow-lg'
					>
						<ButtonLink href={linkTo} title={buttonText} />
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionHero;

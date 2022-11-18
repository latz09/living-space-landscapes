import Image from 'next/image';
import ButtonLink from '../../utils/ButtonLink';
import { motion } from 'framer-motion';

const SectionHero = ({ bgImage, title, linkTo, buttonText, description }) => {
	return (
		<div className='relative w-full h-[70vh]  tracking-widest text-white/80'>
			<Image
				src={bgImage}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black/60 grid place-items-center'>
				<div className='max-w-7xl grid gap-8'>
					<div className='grid gap-2'>
						<h1 className='text-4xl md:text-7xl font-logo text-landscape-500 text-center '>
							{title}
						</h1>
						<motion.div
							className='text-lg md:text-2xl w-2/3 mx-auto'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 1.3 }}
						>
							{description}
						</motion.div>
					</div>
					<motion.div
						className='w-1/3 mx-auto'
						initial={{ opacity: .8 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: .3, duration: 1 }}
					>
						<ButtonLink href={linkTo} title={buttonText} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default SectionHero;

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
				<motion.div
					className='max-w-7xl grid gap-8'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 1.4 }}
				>
					<div className='grid gap-2'>
						<h1 className='text-5xl md:text-7xl font-logo text-landscape-500 text-center '>
							{title}
						</h1>
						<motion.div
							className='sm:text-lg md:text-xl lg:text-2xl  px-2 text-center  lg:w-2/3 mx-auto'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: .55, duration: 1.4 }}
						>
							{description}
						</motion.div>
					</div>
					<div className='w-3/5 md:w-1/3 mx-auto'>
						<ButtonLink href={linkTo} title={buttonText} />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionHero;

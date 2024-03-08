import Image from 'next/image';
import ButtonLink from '../../utils/ButtonLink';
import { motion } from 'framer-motion';

const SectionHero = ({ bgImage, title, linkTo, buttonText, description }) => {
	return (
		<div className='relative w-full h-[50vh] lg:h-[80vh] shadow-lg shadow-landscape-700/40  text-light'>
			<Image
				src={bgImage}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				quality={100}
			/>

			<div className='relative h-full bg-gradient-to-b from-dark/40 via-dark/60 to-dark/10 grid place-items-center'>
				<motion.div
					className='max-w-7xx mx-auto text-center '
					initial={{ opacity: 0, scale: 0.96, y: 35 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1.2 }}
				>
					<div className='grid gap-2 place-items-center'>
						<h1 className=' text-5xl md:text-6xl lg:text-7xl text-landscape-700 font-bold'>
							{title}
						</h1>

						<motion.div
							className='text-2xl lg:text-4xl px-2 lg: mx-auto font-bol '
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1, duration: 1.1 }}
						>
							{description}
						</motion.div>
						<motion.div
							initial={{ opacity: 0}}
							whileInView={{ opacity: 1}}
							transition={{
								delay: 1.1,
								duration: 1.0,
							}}
							className=' w-1/2 md:w-2/3 mx-auto mt-4 lg:mt-8 '
						>
							<ButtonLink href={linkTo} title={buttonText} />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionHero;

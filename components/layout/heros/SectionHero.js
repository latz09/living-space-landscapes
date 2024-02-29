import Image from 'next/image';
import ButtonLink from '../../utils/ButtonLink';
import { motion } from 'framer-motion';

const SectionHero = ({ bgImage, title, linkTo, buttonText, description }) => {
	return (
		<div className='relative w-full h-[50vh] lg:h-[80vh]  text-light'>
			<Image
				src={bgImage}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-gradient-to-b from-dark/20 via-dark/60 to-dark/20 grid place-items-center'>
				<motion.div
					className='max-w-7xx mx-auto  '
					initial={{ opacity: 0, scale: 0.96, y: 35 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1.2 }}
				>
					<div className='grid gap-2 place-items-center'>
						<h1 className=' text-5xl md:text-6xl lg:text-7xl text-landscape-700 font-bold'>
							{title}
						</h1>

						<motion.div
							className='text-xl lg:text-3xl px-2 mx-auto font-bol '
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
								duration: 1.5,
							}}
							className=' w-1/2 md:w-2/3 mx-auto mt-2 lg:mt-4 '
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

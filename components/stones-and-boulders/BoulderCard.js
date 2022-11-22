import ImagesDisplay from './ImagesDisplay';
import { motion } from 'framer-motion';

const BoulderCard = ({ heading, images, description }) => {
	return (
		<div className='grid gap-12 '>
			<h3 className='order-1 text-3xl text-center text-landscape-700'>{heading}</h3>

			<div className='order-3 lg:order-2 p-4 lg:p-0'>
				<ImagesDisplay images={images} />
			</div>
			<motion.div
				className='gap-4 order-2 lg:order-3 '
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ delay: 0.15, duration: 1.3 }}
			>
				<div className='prose mx-auto text-xl font-logo text-center'>
					{description}
				</div>
			</motion.div>
		</div>
	);
};

export default BoulderCard;

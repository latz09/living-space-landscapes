import ImagesDisplay from './ImagesDisplay';
import { motion } from 'framer-motion';

const BoulderCard = ({ heading, images, description }) => {
	return (
		<div className='grid gap-12 '>
			<h3 className='text-3xl text-center text-landscape-700'>{heading}</h3>

			<div className=''>
				<ImagesDisplay images={images} description={description} />
			</div>
		</div>
	);
};

export default BoulderCard;

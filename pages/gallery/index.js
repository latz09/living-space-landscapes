import Image from 'next/image';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';
import { motion } from 'framer-motion';

const Gallery = () => {
	return (
		<>
			<Meta
				pageTitle={'Inspirational Gallery'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>

			<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-8 place-items-center sm:px-1 md:px-[5vw] py-10 lg:py-20 bg-landscape-500/30'>
				{galleryImages.map((image, index) => (
					<motion.div
						key={index}
						initial={{}}
						whileHover={{ scale: 1.2, zIndex: 10 }}
						transition={{ duration: 0.4 }}
						className='hover:shadow-xl grid place-items-center transition duration-700'
					>
						<Image src={image.image} alt={image.alt} />
					</motion.div>
				))}
			</div>
		</>
	);
};
export default Gallery;

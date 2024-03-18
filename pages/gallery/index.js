import Image from 'next/image';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';
import { motion } from 'framer-motion';

const Gallery = () => {
	// Function to scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // For smooth scrolling
		});
	};

	return (
		<>
			<Meta
				pageTitle={'Inspirational Gallery'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>

			<div className='grid lg:grid-cols-2 xl:grid-cols-3  gap-24  lg:gap-12 place-items-center md:px-[5vw] py-24 bg-landscape-500/30'>
				{galleryImages.map((image, index) => (
					<div key={index}>
						<div
							className='shadow-lg shadow-dark/30 grid place-items-center transition duration-700 border-y-[3px] lg:border-x-[3px] border-light lg:rounded bg-gradient-to-l from-landscape-500 via-landscape-300/70 to-landscape-700/70'
							// initial={{ opacity: 0 }}
							// whileInView={{ opacity: 1 }}
							// transition={{ delay: 0.3, duration: 1.1 }}
						>
							<motion.div className="grid place-items-center "
                            initial={{ opacity: 0.3, scale: .95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: .15, duration: 1.1 }}
                            >
								<Image src={image.image} alt={image.alt} />
							</motion.div>
						</div>
					</div>
				))}
			</div>

			<button
				onClick={scrollToTop}
				className='fixed bottom-5 left-1/2 transform -translate-x-1/2 text-4xl bg-landscape-700  text-light rounded-full shadow-lg shadow-dark/40'
				aria-label='Scroll to Top'
			>
				<FaRegArrowAltCircleUp />
			</button>
		</>
	);
};

export default Gallery;

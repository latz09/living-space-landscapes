import Image from 'next/image';
import { carouselImages } from '../../data/carouselImages';
import ButtonLink from '../utils/ButtonLink';
import SectionHeading from '../utils/SectionHeading';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
	return (
		<>
			<div className='py-8'>
				<SectionHeading title={'Inspiration Gallery'} />
			</div>
			<div className='grid gap-4 md:grid-cols-2  md:gap-8'>
				{carouselImages.map((image) => (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 1.2 }}
						key={image.src}
						className='sm:m-0 md:px-2'
					>
						<Image
							alt={image.src}
							src={image.src}
							height={400}
							width={475}
							layout='intrinsic'
						/>{' '}
					</motion.div>
				))}
			</div>
			<ButtonLink href={'/gallery'} title='Full Gallery' />
		</>
	);
};
export default GalleryPreview;

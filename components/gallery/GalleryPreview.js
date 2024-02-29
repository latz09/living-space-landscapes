import Image from 'next/image';
import { carouselImages } from '../../data/carouselImages';
import ButtonLink from '../utils/ButtonLink';
import SectionHeading from '../utils/SectionHeading';
import { motion } from 'framer-motion';
import FadeUpWrapper from '../utils/wrapper-animations/FadeUpWrapper';

const GalleryPreview = () => {
	return (
		<>
			<div className='pt-8'>
				<SectionHeading title={'Inspiration Gallery'} />
			</div>
			<FadeUpWrapper>
				<div className='grid gap-16 md:grid-cols-2  md:gap-16'>
					{carouselImages.map((image) => (
						<motion.div
							initial={{ opacity: 0, y: 40}}
							whileInView={{ opacity: 1, y: 0}}
							transition={{ delay: 0.2, duration: 1.2 }}
							key={image.src}
							className='sm:m-0  rounded-sm  shadow-lg shadow-landscape-700/40  grid place-items-center'
						>
							<Image
								alt={image.src}
								src={image.src}
								height={400}
								width={475}
								// layout='fill'
								className=''
							/>{' '}
						</motion.div>
					))}
				</div>
			</FadeUpWrapper>
			<div className=" w-2/3 lg:w-1/3 mx-auto">
			<ButtonLink href={'/gallery'} title='Full Gallery' /></div>
		</>
	);
};
export default GalleryPreview;

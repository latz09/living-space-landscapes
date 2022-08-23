import Image from 'next/image';
import { carouselImages } from '../../data/carouselImages';
import ButtonLink from '../utils/ButtonLink';

const GalleryPreview = () => {
	return (
		<>
			<div className='grid md:grid-cols-2  md:gap-12'>
				{carouselImages.map((image) => (
					<div
						key={image.src}
						className=' grid gap-7 pb-8 sm:m-0 md:px-2'
					>
						<Image
							alt={image.src}
							src={image.src}
							height={400}
							width={475}
							layout='intrinsic'
						/>{' '}
					</div>
				))}
			</div>
			<ButtonLink href={'/gallery'} title='Full Gallery'/>
		</>
	);
};

export default GalleryPreview;

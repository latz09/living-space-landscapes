import Image from 'next/image';
import { carouselImages } from '../../data/carouselImages';

const Carousel = () => {
	return (
		<div className='grid md:grid-cols-2 gap-4'>
			{carouselImages.map((image) => (
				<div
					key={image.src}
					className='shadow-md grid gap-7 justify-items-center place-content-center p-3 pb-8 m-4 sm:m-0 border border-gray-500 border-opacity-30'
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
	);
};

export default Carousel;
 
import Image from 'next/image';
import { carouselImages } from '../../data/carouselImages';

const Carousel = () => {
	return (
		<div className='grid md:grid-cols-2 gap-4 md:justify-items-center'>
			{carouselImages.map((image) => (
				<div
					key={image.src}
					className=' grid gap-7 place-content-center pb-8 sm:m-0 md:px-2'
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
 
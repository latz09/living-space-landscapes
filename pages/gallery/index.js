import ImageItem from '../../components/gallery/ImageItem';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';

const Gallery = () => {
	return (
		<>
			<Meta
				pageTitle={'Inspirational Gallery'}
				description={
					'Creating your landscape with a naturalistic style. Boulders, stones, japanese gardening, patios, pathways'
				}
			/>
			<div className='bg-landscape-500 max-w-7xl mx-auto px-2 md:px-4 border-x-8 border-landscape-700 '>
				<div className='grid xl:grid-cols-2 place-items-center  gap-4  pt-24 pb-16'>
					{galleryImages.map((image) => (
						<div key={image.image}>
							<ImageItem image={image.image} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Gallery;

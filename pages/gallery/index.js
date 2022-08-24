import ImageItem from '../../components/gallery/ImageItem';
import PageHeading from '../../components/utils/PageHeading';
import { galleryImages } from '../../data/carouselImages';
import { v4 as uuid } from 'uuid';

const Gallery = () => {
	return (
		<div className='bg-gray-200 border-l-4 border-landscape-700 pt-12'>
		
			<div className='bg-landscape-300 max-w-7xl mx-auto px-2 md:px-4 border-x-8 border-landscape-500'>
				<div className='grid xl:grid-cols-2 place-items-center  gap-4  bg-landscape-500 py-9'>
					{galleryImages.map((image) => (
						<div key={uuid()}>
							<ImageItem image={image} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;

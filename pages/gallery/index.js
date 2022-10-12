import { v4 as customId } from 'uuid';
import ImageItem from '../../components/gallery/ImageItem';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';

const Gallery = () => {
	return (
		<>
			<Meta
				pageTitle={'Inspirational Gallery'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='bg-landscape-500 max-w-7xl mx-auto px-2 md:px-4 border-x-8 border-landscape-700 '>
				<div className='pt-24 pb-16'>
					<div className='grid xl:grid-cols-2 place-items-center  gap-4  '>
						{galleryImages.map((image) => (
							<div key={customId()}>
								<ImageItem image={image.image} alt={image.alt} />
							</div>
						))}
					</div>
				</div>
			</div>
		</> 
	);
};
export default Gallery;

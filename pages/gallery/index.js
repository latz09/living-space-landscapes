import ImageItem from '../../components/gallery/ImageItem';
import PageHeading from '../../components/utils/PageHeading';
import { galleryImages } from '../../data/carouselImages';
import { v4 as uuid } from 'uuid';

const Gallery = () => {
	
	return (
		<div>
          
            <PageHeading  title='Gallery'/>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center max-w-7xl mx-auto min-h-screen'>
				{galleryImages.map((image) => (
					<div key={uuid()} className="p-3 shadow-lg text-center mx-8 sm:mx-0">
						<ImageItem image={image} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;

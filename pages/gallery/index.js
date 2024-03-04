import Image from 'next/image';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <>
            <Meta
                pageTitle={'Inspirational Gallery'}
                description={
                    'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
                }
            />

            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-16 place-items-center md:px-[5vw] py-10 lg:py-20 bg-landscape-500/30'>
                {galleryImages.map((image, index) => (
                    <div key={index}>
                        <motion.div
                            className='shadow-lg shadow-dark/50 grid place-items-center transition duration-700'
                            initial={{ y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Set priority to true for the first 5-6 images */}
                            {index < 5 ? (
                                <Image src={image.image} alt={image.alt} priority={true} />
                            ) : (
                                <Image src={image.image} alt={image.alt} />
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
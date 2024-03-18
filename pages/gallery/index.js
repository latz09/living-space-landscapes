import Image from 'next/image';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';
import { motion } from 'framer-motion';

const Gallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '200% 0px', // Load when about 2 screen lengths away
            threshold: 0.5 // Load when 50% of the image is in the viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const imagesToObserve = containerRef.current.querySelectorAll('img[data-src]');
        imagesToObserve.forEach(image => observer.observe(image));

        return () => observer.disconnect();
    }, []);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // For smooth scrolling
        });
    };

    return (
        <>
            <Meta
                pageTitle={'Inspirational Gallery'}
                description={
                    'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
                }
            />

            <div ref={containerRef} className='grid lg:grid-cols-2 xl:grid-cols-3  gap-24  lg:gap-12 place-items-center md:px-[5vw] py-24 bg-landscape-500/30'>
                {galleryImages.map((image, index) => (
                    <div key={index}>
                        <motion.div
                            className='shadow-lg shadow-dark/30 grid place-items-center transition duration-700 border-y-[3px] lg:border-x-[3px] border-light lg:rounded'
                            initial={{ scale:.955 }}
                            whileInView={{ scale:1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Set priority to true for the first 10 images */}
                            <Image
                                src={image.image} // Provide a placeholder image
                                // data-src={image.image} // Store the actual image source in data attribute
                                alt={image.alt}
                                // style={{ width: '100%', height: 'auto' }}
                                priority={index < 5}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollToTop}
                className='fixed bottom-5 left-1/2 transform -translate-x-1/2 text-4xl bg-landscape-700  text-light rounded-full shadow-lg shadow-dark/40'
                aria-label='Scroll to Top'
            >
                <FaRegArrowAltCircleUp />
            </button>
        </>
    );
};

export default Gallery;

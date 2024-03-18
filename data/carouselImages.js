import image4 from '../public/images/gallery-images/old-website-images/4.jpg';
import image12 from '../public/images/gallery-images/old-website-images/12.jpg';
import image13 from '../public/images/gallery-images/old-website-images/13.jpg';
import image62 from '../public/images/gallery-images/old-website-images/62.jpg';

// Define an array of images to be used in the gallery preview
export const carouselImages = [image12, image13, image4, image62];



// Dynamically import additional images

const importContexts = [
    { context: require.context('../public/images/gallery-images/old-website-images-tiny', false, /\.(jpg)$/), directory: 'old-website-images-tiny' },
    { context: require.context('../public/images/gallery-images/october-twenty-two-tiny', false, /\.(jpg)$/), directory: 'october-twenty-two-tiny' },
    { context: require.context('../public/images/gallery-images/twenty-twenty-four', false, /\.(jpg)$/), directory: 'twenty-twenty-four' },
];

// Define an empty array to store all gallery images
export const galleryImages = [];

// Dynamically import images from each import context
importContexts.forEach(({ context, directory }) => {
    const images = context.keys().map(context);
    images.forEach((image, index) => {
        galleryImages.unshift({
            image,
            alt: `Image ${images.length - index}`, // Generating unique alt text in reverse order
            category: '', // You can specify the category if applicable
            directory, // Add the directory as a property
        });
    });
});
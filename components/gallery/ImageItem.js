import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageItem = ({ image, alt }) => {
	const galleryImageVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: .6,
			},
		},
	};

	return (
		<motion.div
			className='hover:scale-110 lg:hover:scale-125 md:p-12 transition duration-1000'
			variants={galleryImageVariant}
			initial='hidden'
			whileInView='visible'
		>
			<div className='shadow-lg  grid items-center '>
				<Image src={image} alt={alt} layout='intrinsic' placeholder='blur' />
			</div>
		</motion.div>
	);
};
export default ImageItem;

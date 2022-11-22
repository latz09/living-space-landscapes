import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ImagesDisplay = ({ images, description }) => {
	const [focusedImage, setFocusedImage] = useState(images[0].src);
	const [imageIndex, setImageIndex] = useState(0);

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,

			transition: {
				duration: 1,

				staggerChildren: 0.7,
			},
		},
	};

	const item = {
		hidden: { scale: 0.98, opacity: 0.6 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};
	const handleChange = (index) => {
		setImageIndex(index);
	};

	const prevImage = () => {
		imageIndex === 0
			? setImageIndex(images.length - 1)
			: setImageIndex(imageIndex - 1);
	};

	const nextImage = () => {
		imageIndex + 1 === images.length
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1);
	};

	return (
		<>
			<motion.div
				className='grid gap-2 md:grid-cols-2 md:gap-8  '
				variants={container}
				initial='hidden'
				whileInView='visible'
			>
				<div className='mx-1 md:mx-2 grid'>
					<motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay: .2, duration: 2}}>
						<Image src={images[imageIndex].src} alt='' />
					</motion.div>
					<div className='flex justify-around w-1/3 md:w-1/4 mx-auto text-2xl md:text-3xl text-landscape-700'>
						<span
							onClick={prevImage}
							className='p-3 cursor-pointer animate-pulse'
						>
							<AiOutlineArrowLeft />
						</span>
						<span
							onClick={nextImage}
							className='p-3 cursor-pointer animate-pulse'
						>
							<AiOutlineArrowRight />
						</span>
					</div>
				</div>
				<div className='grid gap-8 md:gap-0'>
					<div className='grid grid-cols-3 gap-2 mx-2 md:mx-0 '>
						{images.map((image, index) => (
							<div
								key={index}
								className=''
								onClick={() => {
									handleChange(index);
								}}
							>
								<Image src={image.src} alt={image.alt} />
							</div>
						))}
					</div>

					<div className='prose mx-4 md:w-4/5 md:mx-auto text-xl text-gray-600 font-logo '>
						{description}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default ImagesDisplay;



// // for description
// initial={{ opacity: 0, scale: 0.8 }}
// whileInView={{ scale: 1, opacity: 1 }}
// transition={{ delay: 0.15, duration: 1.3 }}

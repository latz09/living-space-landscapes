import Image from 'next/image';
import { motion } from 'framer-motion';



const ImagesDisplay = ({ images }) => {


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

	

	return (
		<>
			<motion.div
				className='grid lg:grid-cols-3 gap-6  '
				variants={container}
				initial='hidden'
				whileInView='visible'
			>
				{images.map((image) => (
					<motion.div
						key={image.id}
						variants={item}					
						className=' '
					>
						<div>
							<Image src={image.src} alt={image.alt} priority='true' />
						</div>
					</motion.div>
                    
				))}
			</motion.div>
			
		</>
	);
};

export default ImagesDisplay;

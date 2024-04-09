import Image from 'next/image';
import SectionHeading from '../utils/SectionHeading';
import { motion } from 'framer-motion';

const ProcessPage = ({ title, image, descriptions, index }) => {
	// ADDED THIS, SWITCH IMAGE LOCATION BASED ON
	const isEven = index % 2 === 0;

	return (
		<div className='grid gap-6 lg:gap-16 '>
			<SectionHeading title={title} />

			<div className='grid lg:grid-cols-2 gap-4 place-items-center'>
				<motion.div
					className={`${isEven ? 'order-1' : 'order-2'} col-span-1 w-full px-2  lg:mt-0 `}
					initial={{ y: 60, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					{descriptions.map((paragraph, idx) => (
						<motion.p
							key={idx}
							className='  mb-4 last:mb-0 lg:text-lg leading-7 text-justify mx-2 lg:mx-0'
						>
							{paragraph}
						</motion.p>
					))}
				</motion.div>

				<motion.div
					className={`${
						isEven ? 'order-2' : 'order-1'
					} md:w-4/5 mx-auto shadow-lg shadow-landscape-700/40 grid place-items-center my-4 lg:my-0`}
					initial={{ opacity: 0, scale: .95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<Image src={image} alt={title} priority='true' />
				</motion.div>
			</div>
		</div>
	);
};
export default ProcessPage;

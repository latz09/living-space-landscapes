import Image from 'next/image';
import SectionHeading from '../utils/SectionHeading';
import { motion } from 'framer-motion';

const ProcessPage = ({ title, image, description }) => {
	return (
		<div className='grid gap-12 px-2'>
			<SectionHeading title={title} />

			<div className='grid lg:grid-cols-5 place-items-center gap-8'>
				<motion.div
					className='font-logo  sm:text-lg text-gray-600 prose text-justify tracking-wide px-2 order-2 lg:px-0 lg:order-1 lg:col-span-3 '
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 1 }}
				>
					{description}
				</motion.div>
				<div className='order-1 w-5/6 md:w-2/3 lg:order-2 lg:col-span-2 lg:w-full shadow-lg grid place-items-center '>
					<Image src={image} alt={title} priority='true' />
				</div>
			</div>
		</div>
	);
};
export default ProcessPage;

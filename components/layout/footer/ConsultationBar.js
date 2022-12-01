import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ConsultationBar = () => {
	return (
		<div className='bg-landscape-700 '>
			<Link href={'/contact'}>
				<div className='py-8 text-white text-xl md:text-3xl flex space-x-3 justify-center items-center cursor-pointer hover:opacity-75 transition duration-700'>
					<span>Set up Consultation</span>{' '}
					<motion.div
						initial={{ x: 0}}
						animate={{ x: '6px' }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<span>
							<FaArrowRight />{' '}
						</span>
					</motion.div>
				</div>
			</Link>
		</div>
	);
};

export default ConsultationBar;

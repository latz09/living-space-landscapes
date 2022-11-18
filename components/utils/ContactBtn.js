import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactButton = () => {
	return (
		<>
			<motion.div
				initial={{ scale: 0.98 }}
				animate={{ scale: [0.98, 1, 0.98, 1, 0.98, 1] }}
				transition={{
					duration: 3.8,
					repeat: Infinity,
					
					repeatDelay: 3,
					ease: 'easeInOut'
				}}
				className=""
			>
				<div>
					<Link href={'/contact'}>
						<a className=' text-2xl px-1 py-2 '>Contact us</a>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default ContactButton;

import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactButton = () => {
	return (
		<>
			<motion.div
				initial={{ scale: 0.98 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1.2,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 3
				}}
			>
				<div>
					<Link href={'/contact'}>
						<a className=' text-2xl  px-2 py-1 '>Contact us</a>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default ContactButton;

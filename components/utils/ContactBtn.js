import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactButton = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0.75 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 1.1,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className=''
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

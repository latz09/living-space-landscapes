import Link from 'next/link';
import { motion } from 'framer-motion';
const ButtonLink = ({ href, title }) => {
	return (
		<motion.div
			animate={{ scale: 1, opacity: 1 }}
			whileHover={{ scale: 1.04, opacity: .9 }}
			transition={{ duration: 0.6 }}
		>
			<Link href={href}>
				<div className='button-link'>
					<span>{title}</span>
				</div>
			</Link>
		</motion.div>
	);
};
export default ButtonLink;
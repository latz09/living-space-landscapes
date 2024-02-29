import { motion } from 'framer-motion';

const FadeUpWrapper = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.2 }}
		>
			{children}
		</motion.div>
	);
};

export default FadeUpWrapper;

import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactButton = () => {
	return (
		<>
			
				<div>
					<Link href={'/contact'}>
						<a className=' text-lg lg:text-2xl px-2 text-light '>Contact us</a>
					</Link>
				</div>
			
		</>
	);
};

export default ContactButton;

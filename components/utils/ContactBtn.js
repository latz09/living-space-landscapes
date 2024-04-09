import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactButton = () => {
	return (
		<>
			
				<div>
					<Link href={'/contact'} >
						<a className=' text-lg border bg-landscape-700/40 hover:bg-landscape-700 transition duration-700 rounded-full lg:text-2xl font-bold px-4 py-2 text-light '>Contact us</a>
					</Link>
				</div>
			
		</>
	);
};

export default ContactButton;

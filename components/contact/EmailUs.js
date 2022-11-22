import { motion } from 'framer-motion';
import Mailto from '../utils/Mailto';
// import SocialHeroLinks from '../utils/SocialHeroLinks';
const body =
	'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';

const EmailUs = () => {
	return (
		<div className='grid gap-8 '>
			<div className='grid gap-4'>
				<h1 className='text-center text-4xl md:text-6xl text-landscape-700 font-long'>
					Send us an email
				</h1>
				<div className='text-landscape-700 text-justify  tracking-wider md:text-lg font-logo'>
					Tell us more about your project! We will contact you for the next
					steps. Most projects start with a consultation and paid-for design.
				</div>
			</div>
			<motion.div
			
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.03 }}
				transition={{ duration: 0.6 }}
			>
				<Mailto
					email='megan@livingspacelandscapes.com'
					cc='scott@livingspacelandscapes.com'
					subject='Consultation Request'
					body={body}
				>
					<button className='bg-landscape-700 text-gray-100 text-xl w-full p-2 '>
						Email Us
					</button>
				</Mailto>
			</motion.div>
		</div>
	);
};
export default EmailUs;

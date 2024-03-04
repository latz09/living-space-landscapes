import { motion } from 'framer-motion';
import Mailto from '../utils/Mailto';
import envelope from '../../public/images/svgs/envelope.svg';
import Image from 'next/image';
const body =
	'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';

const EmailUs = () => {
	return (
		<div className='grid gap-8 lg:gap-6 '>
			<div className='grid gap-4 lg:gap-4 place-items-center '>
				<div className='grid gap-4'>
				
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 0.91 }}
						transition={{ delay: 0.3, duration: 1.2 }}
						className='order-1 lg:order-2 place-self-center '
					>
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 0.975 }}
							transition={{
								delay: 1.5,
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<Image src={envelope} alt='' />
						</motion.div>
					</motion.div>
					<h1 className=' text-center  text-2xl md:text-4xl text-landscape-700 font-logo'>
						Send us an email
					</h1>
				</div>
				<div className='text-dark/80    md:text-lg font-logo font-bold text-center'>
					Tell us more about your project! We will contact you for the next
					steps. Most projects start with a consultation and paid-for design.
				</div>
			</div>
			<motion.div
				className='grid place-items-center '
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.09 }}
				transition={{ duration: 0.6 }}
			>
				<Mailto
					email='megan@livingspacelandscapes.com'
					cc='scott@livingspacelandscapes.com'
					subject='Consultation Request'
					body={body}
				>
					<button className='bg-landscape-700 text-light w-full px-8 py-2 text-xl lg:text-2xl   rounded-full'>
						Send Email Now
					</button>
				</Mailto>
			</motion.div>
		</div>
	);
};
export default EmailUs;

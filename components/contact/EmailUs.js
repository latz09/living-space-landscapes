import { motion } from 'framer-motion';
import Mailto from '../utils/Mailto';
import envelope from '../../public/images/svgs/envelope.svg';
import Image from 'next/image';
const body =
	'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';

const EmailUs = () => {
	return (
		<div className='grid gap-8 lg:gap-6 '>
			<div className='grid gap-4 lg:gap-4 '>
				<div className='grid gap-6 lg:flex lg:items-center lg:space-x-8'>
					<h1 className='order-2 text-center lg:order-1 text-2xl md:text-4xl font-semibold text-landscape-700 font-long'>
						Send us an email
					</h1>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 0.91 }}
						transition={{ delay: 0.3, duration: 1.2 }}
						className='order-1 lg:order-2 place-self-center '
					>
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 0.94 }}
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
				</div>
				<div className='text-landscape-700 text-justify  tracking-wider md:text-lg font-logo font-bold'>
					Tell us more about your project! We will contact you for the next
					steps. Most projects start with a consultation and paid-for design.
				</div>
			</div>
			<motion.div
				className='place-self-center lg:place-self-start  w-2/3 lg:w-1/2 '
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
					<button className='bg-landscape-700 text-gray-100 w-full px-4 py-2 text-xl lg:text-2xl  tracking-widest'>
						Send Email
					</button>
				</Mailto>
			</motion.div>
		</div>
	);
};
export default EmailUs;

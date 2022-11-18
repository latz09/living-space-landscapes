import Image from 'next/image';
import logo from '../../public/images/logos/navlogo.png';
import Mailto from '../utils/Mailto';
// import SocialHeroLinks from '../utils/SocialHeroLinks';
const body =
	'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';

const EmailUs = () => {
	return (
		<div className='bg-[#F2F8EF] grid gap-8'>
			<div className='grid gap-4'>
				<h1 className='text-center text-4xl md:text-6xl text-landscape-700 font-long'>
					Send us an email
				</h1>
				<div className='text-landscape-700 text-center grid  items-center tracking-wider md:text-lg font-logo'>
					Tell us more about your project! We will contact you for the next steps.
					Most projects start with a consultation and paid-for design.
				</div>
			</div>
			<div className=' text-landscape-700  text-center'>
				<Mailto
					email='megan@livingspacelandscapes.com'
					cc='scott@livingspacelandscapes.com'
					subject='Consultation Request'
					body={body}
				>
					<button className='bg-landscape-700 shadow-md text-lg md:text-2xl text-white hover:bg-opacity-75 cursor-pointer transition duration-700 font-logo w-1/3 py-2'>
						Email Us
					</button>
				</Mailto>
			</div>
		</div>
	);
};
export default EmailUs;

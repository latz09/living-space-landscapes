import Image from 'next/image';
import logo from '../../public/images/logos/navlogo.png';
import Mailto from '../utils/Mailto';
import SocialHeroLinks from '../utils/SocialHeroLinks';
const EmailUs = () => {
	const body =
		'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';
	return (
		<div className='h-full  px-4 grid gap-4 pt-9 '>
			<h1 className='text-center text-4xl md:text-6xl text-landscape-700 font-long'>
				Contact us
			</h1>
			<div className='text-landscape-700 grid  items-center tracking-wider'>
				<p className='md:text-lg font-semibold opacity-80 text-center pb-8'>
					Tell us more about your project! We will contact you for next steps.
					Most projects start with a consultation and paid-for design.
				</p>
			</div>
			<div className=' text-landscape-700  text-center'>
				<Mailto
					email='megan@livingspacelandscapes.com'
					cc='scott@livingspacelandscapes.com'
					subject='Consultation Request'
					body={body}
				>
					<button className='bg-landscape-700 py-2 px-7 shadow-md text-lg md:text-2xl text-white hover:bg-opacity-75 cursor-pointer transition duration-700 font-spaces my-4'>
						Email Us
					</button>
				</Mailto>
			</div>
			<div className='h-full  grid items-center p-20'>
				<Image src={logo} alt='' />
			</div>
		</div>
	);
};
export default EmailUs;

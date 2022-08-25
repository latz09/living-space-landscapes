import Image from 'next/image';
import logo from '../../public/images/logos/navlogo.png';


import Mailto from '../utils/Mailto';

const EmailUs = () => {
	const body =
		'A short paragraph you can write possibly explaining what you would look in the email.  Such as the project type, the timeline they are looking to complete, a phone number, a good time to call them etc.  Subject line can also be anything you would like';

	return (
		<div className="h-full  px-4 grid gap-4 py-9 ">
            <h1 className="text-center text-4xl md:text-6xl text-landscape-700 font-long">Contact us</h1>
			<div className='text-landscape-700 grid  items-center'>
				<p className='md:text-lg font-semibold opacity-80 text-center pb-8'>
					{' '}
					Our designer will contact you and schedule a consultation and gather
					more information about your project{' '}
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
            <div className="h-full  grid items-center p-12">
                <Image src={logo} alt='' />
            </div>
          
			
		</div>
	);
};

export default EmailUs;

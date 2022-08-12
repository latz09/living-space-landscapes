import Link from 'next/link';
import { BsArrowBarRight } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='bg-landscape-500 w-full bottom-0 '>
			<Link href={'/contact'}>
				<div className='py-8 text-white text-xl md:text-3xl flex space-x-3 justify-center items-center cursor-pointer hover:opacity-75 transition duration-700'>
					<span> Set up Consultation </span>{' '}
					<span>
						<BsArrowBarRight />{' '}
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Footer;

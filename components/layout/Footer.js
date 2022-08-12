import Link from 'next/link';

const Footer = () => {
	return (
		<div className='bg-landscape-500 w-full bottom-0 '>
			<Link href={'/contact'}>
				<div className='py-8 text-white text-3xl'>
					
				</div>
			</Link>
		</div>
	);
};

export default Footer;

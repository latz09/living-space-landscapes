import Link from 'next/link';

const NavLinks = () => {
	return (
		<>
			<div className='flex justify-between content-center'>
				<div className='nav-link'>
					<Link href={'/'}> Home</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/'}>Process</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/'}>Services</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/'}>Gallery</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/'}>Why Us</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/'}>Contact</Link>
				</div>
			</div>
		</>
	);
};

export default NavLinks;

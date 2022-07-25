import Link from 'next/link';

const NavLinks = () => {
	return (
		<>
			<ul className='grid gap-2 py-3 justify-center bg-white  md:py-0 md:flex md:justify-between md:content-center md:items-center px-4'>
				<li className='nav-link'>
					<Link href={'/'}> Home</Link>
				</li>

				<li className='nav-link'>
					<Link href={'/services'}>Services</Link>
				</li>
				<li className='nav-link'>
					<Link href={'/gallery'}>Gallery</Link>
				</li>
				<li className='nav-link'>
					<Link href={'/why-us'}>Why Us</Link>
				</li>
				<li className='nav-link'>
					<Link href={'/reviews'}>Reviews</Link>
				</li>
				<li className='nav-link'>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
		</>
	);
};

export default NavLinks;

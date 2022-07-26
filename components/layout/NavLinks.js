import Link from 'next/link';
import Logo from './Logo';

const NavLinks = () => {
	return (
		<div>
			
			<ul className='grid gap-2  justify-center bg-white   md:flex md:justify-between md:content-center md:items-center p-4 '>
			
				<li className='nav-link'>
					<Link href={'/'}> Home</Link>
				</li>

				<li className='nav-link'>
					<Link href={'/services'}>Services</Link>
				</li>
				<li className='nav-link '>
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
		</div>
	);
};

export default NavLinks;

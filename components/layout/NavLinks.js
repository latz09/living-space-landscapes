
import Link from 'next/link';

const NavLinks = () => {
	return (
		<>
			<div className='grid gap-2 place-content-center py-3 md:py-0 md:flex md:justify-between md:content-center md:items-center'>
				<div className='nav-link'>
					<Link href={'/'}> Home</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/our-process'}>Process</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/services'}>Services</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/gallery'}>Gallery</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/why-us'}>Why Us</Link>
				</div>
				<div className='nav-link'>
					<Link href={'/contact'}>Contact</Link>
				</div>
			
			</div>
		</>
	);
};

export default NavLinks;

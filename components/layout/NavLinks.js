import Link from 'next/link';

const NavLinks = () => {
	const navLinks = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Services',
			link: '/services',
		},
		{
			name: 'Why Us',
			link: '/why-us',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
		{
			name: 'Gallery',
			link: '/gallery',
		},
	];

	return (
		<div className=" ">
			<ul className='nav-bar '>
				{navLinks.map((link) => (
					<li key={link.name} className='nav-link'>
						<Link href={link.link}>{link.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavLinks;

import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { MdHouseSiding } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
	const navLinks = [
		{
			name: 'Japanese gardens',
			link: '/japanese-gardens',
			featured: true,
		},

		{
			name: 'Why Us',
			link: '/why-us',
			featured: false,
		},
		{
			name: 'Services',
			link: '/services',
			featured: false,
		},

		//FOR NAVBAR IF FEATURED EQUALS TRUE PUT THE LEAVE...HAVE THE LEAF GREEN. HOPEFULLY CAN GIVE A LITTLE SPACE

		{
			name: 'Contact',
			link: '/contact',
			featured: false,
		},
		{
			name: 'Gallery',
			link: '/gallery',
			featured: false,
		},
	];

	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	return (
		<div className='shadow-md w-full fixed top-0 left-0 z-10'>
			<div className='bg-landscape-500'>
				<div className='max-w-7xl mx-auto flex items-center justify-between py-4 md:px-10 px-7 text-gray-50 tracking-wider'>
					<Link href={'/'}>
						<span
							className='text-landscape-700  transition duration-700 text-4xl md:text-5xl cursor-pointer'
							onClick={closeMenu}
						>
							<MdHouseSiding />{' '}
						</span>
					</Link>

					<button
						onClick={() => setOpen(!open)}
						className='text-3xl  cursor-pointer md:hidden'
					>
						<RiMenu3Fill />
					</button>

					<ul
						className={` bg-landscape-500 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in ${
							open ? 'top-16' : 'top-[-490px]'
						}`}
					>
						{navLinks.map((link) => (
							<div
								key={link.name}
								className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
								onClick={() => setOpen(!open)}
							>
								<Link href={link.link}>
									<a className={`hover:text-landscape-700 duration-700 border-b pb-2 md:border-none md:pb-0 ${link.featured === true && 'underline underline-offset-8 decoration-2 decoration-landscape-700 hover:decoration-gray-50 transition duration-700 border-none'}`}>
										{link.name}
									</a>
								</Link>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

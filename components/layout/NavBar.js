import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdHouseSiding } from 'react-icons/md';

const Navbar = () => {
	const navLinks = [
		{
			name: 'Japanese Gardens',
			link: '/japanese-gardens',
		},
		{
			name: 'Why Us',
			link: '/why-us',
		},
		{
			name: 'Our Process',
			link: '/our-process',
		},
		{
			name: 'Gallery',
			link: '/gallery',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	];

	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	return (
		<div className='shadow-md w-full fixed top-0 left-0 z-10'>
			<div className='bg-landscape-500'>
				<div className='max-w-7xl mx-auto flex items-center justify-between py-4 md:px-10 px-7 text-gray-50 tracking-widest'>
					<Link href={'/'}>
						<span
							className='hover:text-landscape-700 duration-700 text-4xl cursor-pointer'
							onClick={closeMenu}
						>
							<MdHouseSiding />{' '}
						</span>
					</Link>

					<button
						onClick={() => setOpen(!open)}
						className='text-3xl  cursor-pointer md:hidden'
					>
						{!open ? <RiMenu3Fill /> : <RiCloseLine />}
					</button>

					<ul
						className={` bg-landscape-500 border-b-4 border-landscape-700 md:border-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in ${
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
									<a className='hover:text-landscape-700 duration-700 border-b pb-2 md:border-none md:pb-0'>
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

import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { MdHouseSiding } from 'react-icons/md';
import NavLinks from './NavLinks';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className='bg-landscape-500'>
			<div className='max-w-7xl mx-auto '>
				<div className='hidden md:block py-2'>
					<NavLinks />
				</div>
				<div className='md:hidden nav-link my-3 mr-3 flex justify-between ml-2  text-2xl '>
					<Link href={'/'}>
						<div className='text-4xl cursor-pointer'>
							<MdHouseSiding />
						</div>
					</Link>
					<button onClick={toggleMenu}>
						<RiMenu3Fill />
					</button>
				</div>
				<div
					className='md:hidden'
					onClick={() => {
						setMenuOpen(false);
					}}
				>
					{menuOpen && <NavLinks />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

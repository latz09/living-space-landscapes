import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className='relative'>
			<div className='max-w-4xl mx-auto'>
				<Logo />
			</div>
			<div className='hidden md:block p-2'>
				<NavLinks />
			</div>
			<div className='md:hidden nav-link p-2 flex justify-end'>
				<button onClick={toggleMenu}>
					<RiMenu3Fill />
				</button>
			</div>
			<div className="md:hidden"
				onClick={() => {
					setMenuOpen(false);
				}}
			>
				{menuOpen && <NavLinks />}
			</div>
		</div>
	);
};

export default Navbar;

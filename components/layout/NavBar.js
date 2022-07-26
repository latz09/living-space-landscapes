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
		<div className='max-w-7xl mx-auto '>
	
		
			<div className='hidden md:block my-2'>
				<NavLinks />
			</div>
			<div className='md:hidden nav-link my-3 mr-3 flex justify-end  text-2xl '>
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

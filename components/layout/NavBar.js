import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
	return (
		<>
			<div className='max-w-4xl mx-auto'>
				<Logo />
			</div>
			<div className='p-4'>
				<NavLinks />
			</div>
		</>
	);
};

export default Navbar;

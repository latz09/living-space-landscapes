import Footer from './footer/Footer';
import Navbar from './NavBar';
import Navigation from './Navigation';
const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen'>
		
			<Navigation	/>
			<main className='flex-grow  bg-light '>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;


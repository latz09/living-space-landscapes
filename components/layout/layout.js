import Footer from './Footer';
import Navbar from './NavBar';

const Layout = ({ children }) => {
	return (
		<>
		<div className="max-w-6xl mx-auto">
			<Navbar /></div>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

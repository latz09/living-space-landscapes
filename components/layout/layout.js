import Footer from './Footer';
import Navbar from './NavBar';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen">
			<div className="">
				<Navbar />
			</div>
			<div className="flex-grow">
				<main>{children}</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

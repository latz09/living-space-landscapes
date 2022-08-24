import React, { useState } from 'react';

const ResponsiveNavbar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
	};

	return (
		<div>
			
		</div>
	);
};

export default ResponsiveNavbar;


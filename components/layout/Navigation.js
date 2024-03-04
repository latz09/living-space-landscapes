import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { MdHouseSiding } from 'react-icons/md';
import { navLinks } from '../../data/navLinks';

const Navigation = () => {
	return (
		<div className='p-4 bg-landscape-700 font-logo'>
			<div className='max-w-6xl mx-auto grid gap-8  '>
				<TopBar />
				<DesktopNavbar />
				<MobileNavbar />
			</div>
		</div>
	);
};

export default Navigation;

const TopBar = () => {
	return (
		<div className='hidden lg:flex items-center justify-between text-light '>
			<div>
				<HomeButtonLink />
			</div>
			<div className="text-xl cursor-pointer hover:scale-90 transtion duration-700 ">
				<Link href={'/contact'}><span className="shadow-lg py-2 px-8 rounded-full bg-dark/20">Contact Us</span></Link>
			</div>
		</div>
	);
};

const DesktopNavbar = () => {
	return (
		<div className='hidden lg:flex justify-between items-center text-light md:text-xl lg:text-2xl'>
			{navLinks.map((link) => (
				<Link key={link.name} href={link.link}>
					<a>{link.name}</a>
				</Link>
			))}
		</div>
	);
};

const MobileNavbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	// Function to handle link clicks
	const handleLinkClick = (url) => {
		toggleModal();
		// Navigate to the URL
	};

	// Side effect to disable/enable scrolling
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);

	return (
		<>
			<div className='lg:hidden px-4 flex justify-between items-center text-light'>
				<div>
					<HomeButtonLink />
				</div>
				<motion.div
					className='cursor-pointer text-3xl'
					whileTap={{ scale: 0.9 }}
					transtion={{ duration: 0.7 }}
					onClick={toggleModal}
				>
					<RiMenu3Fill />
				</motion.div>
			</div>

			{isModalOpen && (
				<div className='fixed inset-0 w-full h-full bg-dark/90 z-50 text-2xl text-light'>
					<motion.div
						className='w-full h-full flex flex-col'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, scale: 0.9 }}
						transition={{ duration: 0.7, scale: 1 }}
						exit={{ opacity: 0 }}
					>
						{/* Close Button */}
						<div className='pt-5 px-5 flex justify-end'>
							<button onClick={toggleModal} className='text-3xl'>
								<RiCloseLine />
							</button>
						</div>
						{/* Links */}
						<div className='flex-grow flex items-center justify-center'>
							<div className='grid gap-6'>
								{navLinks.map((link) => (
									<Link key={link.name} href={link.link}>
										<a
											key={link.name}
											onClick={() => handleLinkClick(link.link)}
											className='cursor-pointer text-center border border-landscape-700 rounded-sm p-4 bg-dark/40'
										>
											<div>{link.name}</div>
										</a>
									</Link>
								))}
								<div className='text-center mt-4'>
									<Link href={'/contact'}>
										<div
											className='cursor-pointer p-3 rounded-full grid bg-landscape-700  '
											onClick={() => handleLinkClick('/contact')}
										>
											Contact Us
										</div>
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</>
	);
};

const HomeButtonLink = () => {
	return (
		<Link href={'/'}>
			<motion.div
				className='text-4xl  cursor-pointer '
				whileTap={{ scale: 0.9 }}
				transtion={{ duration: 0.7 }}
			>
				<MdHouseSiding />
			</motion.div>
		</Link>
	);
};

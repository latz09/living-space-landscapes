import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdHouseSiding } from 'react-icons/md';
import { navLinks } from '../../data/navLinks';
import ContactButton from '../utils/ContactBtn';
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};
	return (
		<div className='shadow-md w-full  top-0 left-0 z-10'>
			<div className='bg-landscape-500 '>
				<div className='max-w-7xl mx-auto grid gap-4 p-4  text-white tracking-widest '>
					{/* Home House and Menu Tab for under Large */}
					<div className='flex justify-between items-center lg:border-b lg:border-b-landscape-700 lg:pb-4'>
						<Link href={'/'}>
							<button
								className='hover:text-landscape-700 duration-700 text-4xl cursor-pointer'
								onClick={closeMenu}
								aria-label='Navigate Home'
							>
								<MdHouseSiding />{' '}
							</button>
						</Link>

						<div
							onClick={() => setOpen(!open)}
							className='text-3xl text-lightblue  cursor-pointer lg:hidden'
						>
							{!open ? (
								<button
									label='open navbar'
									aria-label='open dropdown navigation bar'
									className='hover:text-landscape-700'
								>
									<RiMenu3Fill />{' '}
								</button>
							) : (
								<button
									label='close navbar'
									aria-label='close dropdown navigation bar'
									className='hover:text-landscape-700'
								>
									<RiCloseLine />
								</button>
							)}
						</div>
						<div className='hidden lg:block border-landscape-700/40 hover:font-bold hover:text-landscape-700 border hover:border-gray-200 font-logo p-1  transition duration-700 text-landscape-700'>
							<ContactButton />
						</div>
					</div>

					{/* All the links */}
					<div
						className={`${
							open && 'bg-landscape-500'
						} border-b-2 border-landscape-700  lg:border-none absolute lg:static lg:z-auto z-[-1] left-0 w-full transition-all duration-700 ease-in 
						lg:flex lg:justify-between lg:mt-2
						${open ? 'top-16' : 'top-[-490px]'}`}
					>
						{navLinks.map((link) => (
							<div
								key={link.name}
								className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
								onClick={() => setOpen(!open)}
							>
								<Link href={link.link}>
									<a className='text-white hover:text-landscape-700 transition duration-700'>
										{link.name}
									</a>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		// <div className='shadow-md w-full fixed top-0 left-0 z-10'>
		// 	<div className='bg-landscape-500'>
		// 		<div className='max-w-7xl mx-auto flex items-center justify-between py-4 md:px-10 px-7 text-white tracking-widest'>
		// 			<Link href={'/'}>
		// 				<button
		// 					className='hover:text-landscape-300 duration-700 text-4xl cursor-pointer'
		// 					onClick={closeMenu}
		// 					aria-label='Navigate Home'
		// 				>
		// 					<MdHouseSiding />{' '}
		// 				</button>
		// 			</Link>

		// 			<div
		// 				onClick={() => setOpen(!open)}
		// 				className='text-3xl  cursor-pointer md:hidden'
		// 			>
		// 				{!open ? (
		// 					<button
		// 						label='open navbar'
		// 						aria-label='open dropdown navigation bar'
		// 					>
		// 						<RiMenu3Fill />{' '}
		// 					</button>
		// 				) : (
		// 					<button
		// 						label='close navbar'
		// 						aria-label='close dropdown navigation bar'
		// 					>
		// 						<RiCloseLine />
		// 					</button>
		// 				)}
		// 			</div>

		// 			<div
		// 				className={` bg-landscape-500 border-b-4 border-landscape-700 md:border-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in ${
		// 					open ? 'top-16' : 'top-[-490px]'
		// 				}`}
		// 			>
		// 				{navLinks.map((link) => (
		// 					<div
		// 						key={link.name}
		// 						className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
		// 						onClick={() => setOpen(!open)}
		// 					>
		// 						<Link href={link.link}>
		// 							<a className='hover:text-landscape-700 duration-700 border-b pb-2 md:border-none md:pb-0'>
		// 								{link.name}
		// 							</a>
		// 						</Link>
		// 					</div>
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};
export default Navbar;

import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdHouseSiding } from 'react-icons/md';
import { navLinks } from '../../data/navLinks';

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
						<Link href={'/contact'}>
							<div className='hidden lg:block border-x border-white/50 hover:border-landscape-700 hover:scale-105  hover:border-white/100 font-logo p-1  transition duration-700 text-white text-2xl px-2 cursor-pointer'>
								Contact us
							</div>
						</Link>
					</div>

					{/* All the links */}
					<div
						className={`${
							open && 'bg-landscape-700 lg:bg-landscape-700/0'
						} border-b-2 border-landscape-700  lg:border-none absolute lg:static lg:z-auto z-[-1] left-0 w-full transition-all duration-[850ms] ease-in 
						lg:flex lg:justify-between lg:mt-2
						${open ? 'top-16' : 'top-[-490px]'}`}
					>
						<div className='grid gap-8 py-8 lg:py-0 lg:flex lg:justify-between w-1/2 mx-auto  lg:w-full'>
							<div
								className='lg:hidden text-right '
								onClick={() => setOpen(!open)}
							>
								<Link href={'/contact'}>
									<div className=' text-lg md:text-2xl  text-white  hover:scale-105 transition duration-700 font-logo cursor-pointer'>
										Contact
									</div>
								</Link>
							</div>
							{navLinks.map((link) => (
								<Link href={link.link} key={link.name}>
									<div
										className='text-lg md:text-2xl  text-right cursor-pointer'
										onClick={() => setOpen(!open)}
									>
										<div className='text-white hover:scale-105 transition duration-700 font-logo tracking-widest lg:hover:text-landscape-700'>
											{link.name}
										</div>
									</div>
								</Link>
							))}
						</div>
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

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
		<div className='w-full  top-0 left-0 z-10   '>
			<div className='bg-landscape-700 px-2'>
				<div className='max-w-7xl mx-auto grid gap-4 p-4  text-white  '>
					{/* Home House and Menu Tab for under Large */}
					<div className='flex justify-between items-center lg:border-b-2 lg:border-b-landscape-300 lg:pb-4'>
						<Link href={'/'}>
							<button
								className='hover:text-landscape-300 hover:scale-125 duration-700 text-4xl cursor-pointer'
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
									className='hover:text-landscape-300 hover:scale-125 transition duration-700'
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
							<div className='hidden lg:block border text-xl px-4 py-2 border-light rounded-sm hover:bg-light hover:text-landscape-700 transition duration-700 cursor-pointer shadow-lg shadow-dark/30  '>
								CONTACT US
							</div>
						</Link>
					</div>

					{/* All the links */}
					<div
						className={`${
							open &&
							'bg-landscape-700/70 backdrop-blur-md lg:bg-landscape-700/0'
						}  absolute lg:static lg:z-auto z-[-1] left-0 w-full transition-all duration-[850ms] ease-in 
						lg:flex lg:justify-between lg:mt-2
						${open ? 'top-16' : 'top-[-490px]'}`}
					>
						<div className='grid gap-8 py-8 lg:py-0 lg:flex lg:justify-between w-1/2 mx-auto  lg:w-full'>
							<div
								className='lg:hidden text-right '
								onClick={() => setOpen(!open)}
							>
								<Link href={'/contact'}>
									<div className=' text-lg md:text-xl lg:text-2xl  text-white  hover:scale-105 transition duration-700 font-spaces  cursor-pointr'>
										Contact
									</div>
								</Link>
							</div>
							{navLinks.map((link) => (
								<Link href={link.link} key={link.name}>
									<div
										className='text-lg md:text-xl xl:text-2xl  text-right cursor-pointer'
										onClick={() => setOpen(!open)}
									>
										<div className='text-gray-100 hover:text-white hover:scale-110 transition duration-700 font-logo  lg:hover:text-landscape-00'>
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
	);
};
export default Navbar;

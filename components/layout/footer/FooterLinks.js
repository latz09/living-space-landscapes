import Link from 'next/link';
import { navLinks } from '../../../data/navLinks';

const FooterLinks = () => {
	return (
		<div className='grid grid-cols-2 items-center gap-4 text-landscape-700 font-bold text-sm md:text-base'>
			{navLinks.map((link) => (
				<Link key={link.name} href={link.link}>
					<span className='cursor-pointer'>{link.name}</span>
				</Link>
			))}
			<Link href='/contact'>
				<span className="cursor-pointer">Contact us</span>
			</Link>
		</div>
	);
};

export default FooterLinks;

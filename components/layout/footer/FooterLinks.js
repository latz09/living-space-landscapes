import Link from 'next/link';
import { navLinks } from '../../../data/navLinks';

const FooterLinks = () => {
	return (
		<div className='hidden sm:grid text-landscape-700 font-bold gap-1 text-sm md:text-base'>
			{navLinks.map((link) => (
				<Link key={link.name} href={link.link}>
					<span className='cursor-pointer'>{link.name}</span>
				</Link>
			))}
		</div>
	);
};

export default FooterLinks;

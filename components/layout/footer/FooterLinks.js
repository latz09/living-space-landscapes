import Link from 'next/link';
import { navLinks } from '../../../data/navLinks';

const FooterLinks = () => {
	return (
		<div className='grid lg:grid-cols-2 place-items-center gap-6 text-landscape-700 font-bold t md:text-lg'>
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

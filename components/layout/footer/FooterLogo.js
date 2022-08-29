import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logos/navlogo.png';

const FooterLogo = () => {
	return (
		<div className=' hidden sm:block sm:p-3 opacity-80 cursor-pointer '>
			<Link href={'/'}>
				<a>
					<Image src={logo} alt='Living Space Landscapes Logo' />
				</a>
			</Link>
		</div>
	);
};

export default FooterLogo;

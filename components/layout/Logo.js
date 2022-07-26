import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.png';

const Logo = () => {
	return (
		
			<Link href={'/'}>
				<a className="">
					<Image src={logo} alt='' layout='responsive' priority={true} className="border-4" />
				</a>
			</Link>
		
	);
};

export default Logo;

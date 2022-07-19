import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.png';

const Logo = () => {
	return (
		<Link href={'/'}>
			<a>
				<Image src={logo} alt='' layout='responsive' />
			</a>
		</Link>
	);
};

export default Logo;

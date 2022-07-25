import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.png';

const Logo = () => {
	return (
		<div className="bg-landscape-500 pb-1 shadow mb-4">
		<Link href={'/'}>
			<a>
				<Image src={logo} alt='' layout='responsive'  priority={true} />
			</a>
		</Link>
		</div>
	);
};

export default Logo;

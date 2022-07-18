import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Logo = () => {
	return (
		<div>
            <Image src={logo} alt='' layout='responsive'/>
			
		</div>
	);
};

export default Logo;

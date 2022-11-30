import ConsultationBar from './ConsultationBar';
import CopyRight from './CopyRight';
import FollowUsLinks from './FollowUsLinks';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

const Footer = () => {
	return (
		<div className=''>
			<ConsultationBar />{' '}
			<div className='grid lg:grid-cols-2 gap-8  place-items-center max-w-7xl mx-auto py-8'>
				<FollowUsLinks />
				<FooterLinks />
			</div>
			<div className="grid place-items-center max-w-7xl mx-auto p-2">
				<CopyRight />
			</div>
		</div>
	);
};
export default Footer;

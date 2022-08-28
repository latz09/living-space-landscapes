import ConsultationBar from './ConsultationBar';
import FollowUsLinks from './FollowUsLinks';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

const Footer = () => {
	return (
		<div className=''>
			<ConsultationBar />{' '}
			<div className='grid sm:grid-cols-3  place-items-center max-w-7xl mx-auto py-2 border-b-4 border-landscape-700'>
				<FooterLogo />
				<FooterLinks />
				<FollowUsLinks />

			</div>
		</div>
	);
};
export default Footer;

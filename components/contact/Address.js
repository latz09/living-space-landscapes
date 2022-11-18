import { MdHouseSiding } from 'react-icons/md';
// import SocialHeroLinks from '../utils/SocialHeroLinks';
const Address = () => {
	return (
		<div className='flex space-x-8 text-lg items-center'>
			<MdHouseSiding className='text-3xl' />
			<div className='grid gap-1'>
				<span>Living Space Landscapes, Inc</span>
				<span>820 Concord St North</span>
				<span>Suite 103</span>
				<span>South St. Paul, MN</span>
			</div>
		</div>
	);
};
export default Address;

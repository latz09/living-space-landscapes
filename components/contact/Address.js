import { MdHouseSiding } from 'react-icons/md';

const Address = () => {
	return (
		<div className='grid sm:grid-cols-3 items-center text-lg'>
			<MdHouseSiding className="text-3xl"/>
			<div className="col-span-2 grid mt-4">
				<span>Living Space Landscapes, Inc</span>
				<span>820 Concord St North</span>
				<span>South St. Paul MN 55075</span>
			</div>
		</div>
	);
};

export default Address;

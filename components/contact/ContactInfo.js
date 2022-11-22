import { businessInformation } from '../../data/businessInfo';
import { MdHouseSiding } from 'react-icons/md';
import Contact from './Contact';
const ContactInfo = () => {
	const contacts = businessInformation.contact;
	return (
		<div className=' text-landscape-700 grid gap-8 place-items-center'>
			<div className='flex space-x-8 text-lg items-center'>
				<MdHouseSiding className='text-3xl' />
				<div className='grid gap-1'>
					<span>Living Space Landscapes, Inc</span>
					<span>820 Concord St North</span>
					<span>Suite 103</span>
					<span>South St. Paul, MN</span>
				</div>
			</div>

			<div className='grid gap-4 place-items-center xl:flex xl:space-x-8 xl:items-center xl:border-t  xl:pt-8'>
				{contacts.map((contact) => (
					<div key={contact.phoneNumber} className="xl:border-r border-t pt-4 border-landscape-300 xl:pr-4">
						<Contact
							name={contact.name}
							number={contact.phoneNumber}
							email={contact.email}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
export default ContactInfo;

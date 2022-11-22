import { businessInformation } from '../../data/businessInfo';
import { MdHouseSiding } from 'react-icons/md';
import Contact from './Contact';
import EmailUs from './EmailUs';
const ContactInfo = () => {
	const contacts = businessInformation.contact;
	return (
		<div className='grid place-items-center gap-8 lg:grid-cols-4 lg:gap-8 text-landscape-700 mx-2'>
			<div className='lg:col-span-2 h-full w-4/5 mx-auto lg:border-r border-landscape-500 py-4 px-8'>
				<EmailUs />
			</div>
			<div className="lg:col-span-2 w-full grid gap-8 md:grid-cols-2 place-items-center lg:place-items-start">
				<div className='grid gap-4 '>
					{contacts.map((contact) => (
						<div key={contact.phoneNumber} className=''>
							<Contact
								name={contact.name}
								number={contact.phoneNumber}
								email={contact.email}
							/>
						</div>
					))}
				</div>
				<div className='text-lg  place-self-center '>
					<div className=' grid gap-2'>
						<MdHouseSiding className='text-3xl ' />
						<div className='grid text-justify'>
							<span>Living Space Landscapes, Inc</span>
							<span>820 Concord St North</span>
							<span>Suite 103</span>
							<span>South St. Paul, MN</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactInfo;

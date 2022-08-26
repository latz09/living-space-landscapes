import { businessInformation } from '../../data/businessInfo';
import SectionHeading from '../utils/SectionHeading';
import Address from './Address';
import Contact from './Contact';
const ContactInfo = () => {
	const contacts = businessInformation.contact;
	return (
		<div className='p-4 text-landscape-700 border py-14'>
			<div className='flex justify-center mb-5 border-b pb-8'>
				<Address />{' '}
			</div>
			<div className='grid sm:grid-cols-3 items-center justify-items-center'>
				<div>
					<SectionHeading title='Contact' />
				</div>
				<div className='col-span-2'>
					<div className='grid gap-4'>
						{contacts.map((contact) => (
							<div key={contact.phoneNumber}>
								<Contact
									name={contact.name}
									number={contact.phoneNumber}
									email={contact.email}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactInfo;

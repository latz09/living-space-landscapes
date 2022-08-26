import ContactInfo from '../../components/contact/ContactInfo';
import EmailUs from '../../components/contact/EmailUs';
import Meta from '../../components/utils/Meta';

const contact = () => {
	return (
		<>
				<Meta
				pageTitle={'Contact Us'}
				description={
					'Creating your landscape with a naturalistic style. Boulders, stones, japanese gardening, patios, pathways'
				}
			/>
			<div className='py-16'>
				<div className='bg-landscape-700 bg-opacity-90 text-white text-center  sm:text-2xl md:text-3xl font-bold tracking-wider flex justify-center pt-12 pb-20'>
					<p>Schedule a consultation with one of our professionals</p>
				</div>
				<div className='grid lg:grid-cols-2 gap-4  p-4 max-w-6xl mx-auto items-stretch'>
					<div className='relative bottom-16 bg-white shadow-lg'>
						<EmailUs />
					</div>
					<div className='lg:relative bottom-16 bg-white shadow-lg'>
						<ContactInfo />
					</div>
				</div>
			</div>
		</>
	);
};

export default contact;


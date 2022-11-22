import ContactInfo from '../../components/contact/ContactInfo';
import EmailUs from '../../components/contact/EmailUs';
import Meta from '../../components/utils/Meta';
const Contact = () => {
	return (
		<>
			<Meta
				pageTitle={'Contact Us'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-8 my-8 lg:gap-20 lg:mt-16 lg:mb-20 max-w-7xl mx-auto '>
				<div className=' text-landscape-700/80 text-center  text-2xl md:text-4xl font-logo  tracking-wider '>
					Schedule a consultation with one of our professionals
				</div>
				<div className='grid gap-8 lg:grid-cols-2 lg:gap-4 '>
					<div className="border-r border-landscape-300 pr-4">
						<EmailUs />
					</div>
					<div className="pl-4 ">
						<ContactInfo />
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;

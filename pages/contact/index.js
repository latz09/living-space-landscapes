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
				<div className=' text-landscape-700/80 text-center  text-2xl md:text-4xl font-logo  tracking-wider mx-2'>
					Schedule a consultation with one of our professionals
				</div>
				<ContactInfo />
			</div>
		</>
	);
};
export default Contact;

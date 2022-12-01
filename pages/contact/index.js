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
			<div className='grid gap-2 lg:gap-2 py-8   '>
				<p className='text-center  text-xl md:text-3xl tracking-wider text-landscape-700/70 max-w-7xl mx-auto '>
					Schedule a consultation with one of our professionals
				</p>

				<ContactInfo />
			</div>
		</>
	);
};
export default Contact;

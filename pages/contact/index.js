import ContactInfo from '../../components/contact/ContactInfo';
import Form from '../../components/contact/Form';
import PageHeading from '../../components/utils/PageHeading';

const contact = () => {
	return (
		<div className="mb-12">
			<div className='bg-landscape-700 bg-opacity-90 text-white text-center  sm:text-2xl md:text-3xl font-bold tracking-wider flex justify-center pt-12 pb-20'>
				<p>Schedule a consultation with one of our professionals</p>
			</div>
			<div className='grid lg:grid-cols-2 gap-4  p-4 max-w-6xl mx-auto items-stretch'>
			
				<div className="relative bottom-16 bg-white">
					<Form />
				</div>
                <div className="lg:relative bottom-16 bg-white">
					<ContactInfo />
				</div>
			</div>
		</div>
	);
};

export default contact;

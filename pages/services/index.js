import Service from '../../components/services/Service';
import PageHeading from '../../components/utils/PageHeading';
import { services } from '../../data/services';
import ScrollUp from '../../components/utils/ScrollUp';

const Services = () => {
	return (
		<>
			<div className='grid  sm:gap-16  py-12 max-w-4xl mx-auto col-span-2 '>
				<PageHeading title='Services' />
				{services.map((service) => (
					<div key={service.title}>
						<Service
							title={service.title}
							image={service.image}
							description={service.description}
						/>
					</div>
				))}
				<div className='place-self-center'>
					<ScrollUp href={'/services'} />
				</div>
			</div>
		</>
	);
};

export default Services;

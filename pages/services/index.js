import Link from 'next/link';
import Service from '../../components/services/Service';
import PageHeading from '../../components/utils/PageHeading';
import ScrollUp from '../../components/utils/ScrollUp';
import { services } from '../../data/services';

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
			
			</div>
		</>
	);
};

export default Services;

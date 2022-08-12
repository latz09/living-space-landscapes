import Link from 'next/link';
import Service from '../../components/services/Service';
import PageHeading from '../../components/utils/PageHeading';
import ScrollUp from '../../components/utils/ScrollUp';
import { services } from '../../data/services';

const Services = () => {
	return (
		<>
			<div className='grid sm:gap-16 col-span-2 mb-12'>
				<PageHeading title='Services' />
				<div className='max-w-5xl mx-auto'>
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
			</div>
		</>
	);
};

export default Services;

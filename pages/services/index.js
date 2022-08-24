import ServiceHero from '../../components/layout/hero/ServiceHero';
import Service from '../../components/services/Service';
import { services } from '../../data/services';

const Services = () => {
	return (
		<div className="pt-16">		
			<ServiceHero />
			<div className='grid sm:gap-16 my-12'>
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
		</div>
	);
};

export default Services;

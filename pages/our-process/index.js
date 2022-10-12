import ServiceHero from '../../components/layout/heros/ServiceHero';
import Service from '../../components/services/Service';
import { services } from '../../data/services';
import Meta from '../../components/utils/Meta';
const Services = () => {
	return (
		<>
			<Meta
				pageTitle={'Our Process'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='pt-16'>
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
		</>
	);
};
export default Services;

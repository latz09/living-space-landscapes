import PageHero from '../utils/PageHero';
import Meta from '../utils/Meta';
import ProcessPage from './ProcessPage';

const ProcessLayout = ({
	metaPageTitle,
	metaPageDescription,
	heroImage,
	heroTitle,
	sections,
}) => {
	return (
		<>
			<Meta pageTitle={metaPageTitle} description={metaPageDescription} />
			<div className='grid gap-8 lg:gap-16 '>
				<PageHero heroImage={heroImage} heroTitle={heroTitle} />
				<div className='max-w-7xl mx-auto grid gap-16 mb-20 '>
					{sections.map((service) => (
						<div key={service.title}>
							<ProcessPage
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

export default ProcessLayout;

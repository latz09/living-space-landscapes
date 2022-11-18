import PageHero from '../PageHero';
import Meta from '../Meta';
import PageSection from './ProcessPage';

const PageLayout = ({
	metaPageTitle,
	metaPageDescription,
	heroImage,
	heroTitle,
	sections,
}) => {
	console.log(sections);
	return (
		<>
			<Meta 
				pageTitle={metaPageTitle} 
				description={metaPageDescription} 
			/>
			<div className="grid gap-20 mb-20">
				<PageHero heroImage={heroImage} heroTitle={heroTitle} />
				<div className="max-w-5xl mx-auto grid gap-10">
					{sections.map((service) => (
						<div key={service.title}>
							<PageSection
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

export default PageLayout;

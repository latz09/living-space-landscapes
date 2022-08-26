import FeaturedIn from '../../components/whyus/FeaturedIn';
import Intro from '../../components/whyus/Intro';
import Meta from '../../components/utils/Meta';
import { background } from '../../data/whyUs';
const WhyUs = () => {
	return (
		<>
			<Meta
				pageTitle={'Why Choose Us'}
				description={
					'Creating your landscape with a naturalistic style. Boulders, stones, japanese gardening, patios, pathways'
				}
			/>
			<div className='pt-16'>
				<div className='grid gap-20 my-12'>
					<Intro
						name={background.name}
						image={background.image}
						about={background.about}
						degree={background.degree}
						certifications={background.certifications}
						memberships={background.organizations}
					/>
					<FeaturedIn articles={background.featuredIn} />
				</div>
			</div>
		</>
	);
};
export default WhyUs;

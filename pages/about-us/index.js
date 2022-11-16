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
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='my-12 lg:my-20'>
				<div className='grid gap-4 lg:gap-20 '>
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

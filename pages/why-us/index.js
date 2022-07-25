import PageHeading from '../../components/utils/PageHeading';

import Certifications from '../../components/whyus/Certifications';
import FeaturedIn from '../../components/whyus/FeaturedIn';
import Intro from '../../components/whyus/Intro';

import { background } from '../../data/whyUs';

const WhyUs = () => {
	return (
		<>
			<PageHeading title='Why Us' />
			<div className='grid gap-20 my-12'>
				<Intro
					name={background.name}
					image={background.image}
					about={background.about}
					degree={background.degree}
					certifications={background.certifications}
					memberships={background.organizations}
				/>
				<FeaturedIn articles={background.featuredIn}/>			
				
			</div>
		</>
	);
};

export default WhyUs;

import PageHeading from '../../components/utils/PageHeading';

import Certifications from '../../components/whyus/Certifications';
import FeaturedIn from '../../components/whyus/FeaturedIn';
import Intro from '../../components/whyus/Intro';
import SpecialProjects from '../../components/whyus/SpecialProjects';

import { background } from '../../data/whyUs';

const WhyUs = () => {
	return (
		<div className="min-h-screen">
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

				<FeaturedIn articles={background.featuredIn} />

				<SpecialProjects projects={background.specialProjects}/>
			</div>
		</div>
	);
};

export default WhyUs;


// FIX LAYOUT OF HOMEPAGE
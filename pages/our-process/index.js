import ProcessLayout from '../../components/our-process/ProcessLayout';
import { ourProcessPageData } from '../../data/pageData';

const Services = () => {
	return (
		<>
			{ourProcessPageData.map((data) => (
				<div key={data.metaPageTitle}>
					<ProcessLayout
						metaPageTitle={data.metaPageTitle}
						metaPageDescription={data.metaPageDescription}
						heroImage={data.heroImage}
						heroTitle={data.heroTitle}
						sections={data.sections}
					/>
				</div>
			))}
		</>
	);
};
export default Services;

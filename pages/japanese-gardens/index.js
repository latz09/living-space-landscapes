import ExtraImages from '../../components/japanese-garden/ExtraImages';
import GardensToVisit from '../../components/japanese-garden/GardensToVisit';
import JapaneseSection from '../../components/japanese-garden/JapaneseSection';
import Meta from '../../components/utils/Meta';
import PageHero from '../../components/utils/PageHero';
import SectionHeading from '../../components/utils/SectionHeading';
import { japaneseProcessPageData } from '../../data/pageData';

const JapaneseGardening = () => {
	return (
		<>
			<Meta
				pageTitle={'Japanese Gardening'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-16  lg:mb-16 mt-16  lg:mx-2 xl:mx-0'>
				{/* <PageHero
					heroImage={japaneseProcessPageData.heroImage}
					heroTitle='Japanese Gardens'
				/> */}
				<div className='grid gap-8'>
					<h1 className='text-center text-2xl lg:text-4xl text-landscape-700 font-logo'>
						Japanese Gardens
					</h1>
					<p className='max-w-5xl tracking-wide leading-7 md:leading-8 lg:leading-9 mx-6 md:mx-8 lg:mx-auto text-justify text-gray-600  text-sm md:text-base lg:text-lg border-r px-8 border-landscape-700/40 '>
						{japaneseProcessPageData.intro}
					</p>
				</div>
				<JapaneseSection data={japaneseProcessPageData.credentialSections} />
				<GardensToVisit data={japaneseProcessPageData.gardensToVisit} />
				<ExtraImages data={japaneseProcessPageData.extraPhotos} />
			</div>
		</>
	);
};
export default JapaneseGardening;

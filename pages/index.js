import Hero from '../components/layout/heros/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import GalleryPreview from '../components/gallery/GalleryPreview';
import Reviews from '../components/reviews/Reviews';
import StoneHero from '../components/layout/heros/StoneHero';
import JapaneseHero from '../components/layout/heros/JapaneseHero';
import Meta from '../components/utils/Meta';
import SocialReviewSectionLinks from '../components/utils/SocialReviewSectionLinks';

const HomePage = () => {
	return (
		<>
			<Meta
				pageTitle={'Living Space Landscapes'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-20 mb-8 justify-items-center'>
				<Hero />
				<Philosophy />				
				<JapaneseHero />
				<Reviews />
				<SocialReviewSectionLinks />
				<StoneHero />
				<GalleryPreview />
			</div>
		</>
	);
};
export default HomePage;

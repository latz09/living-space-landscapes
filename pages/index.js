import Hero from '../components/layout/heros/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import GalleryPreview from '../components/gallery/GalleryPreview';
import Reviews from '../components/reviews/Reviews';
import japaneseHeroImage from '../public/images/gallery-images/old-website-images/12.jpg';
import stonesHeroImage from '../public/images/gallery-images/old-website-images/17.jpg'
import Meta from '../components/utils/Meta';
import SocialReviewSectionLinks from '../components/utils/SocialReviewSectionLinks';
import SectionHero from '../components/layout/heros/SectionHero';

const HomePage = () => {
	return (
		<>
			<Meta
				pageTitle={'Living Space Landscapes'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-20 mb-20 justify-items-center'>
				<Hero />
				<Philosophy />
				<SectionHero
					bgImage={japaneseHeroImage}
					title={'Japanese Gardens'}
					linkTo={'/japanese-gardens'}
					buttonText={'learn more'}
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Id aliquet risus feugiat in ante.'
				/>

				<Reviews />
				<SocialReviewSectionLinks />
				<SectionHero
					bgImage={stonesHeroImage}
					title={'Stones and Boulders'}
					linkTo={'/stones-and-boulders'}
					buttonText={'learn more'}
					description='Create a powerful timeless beauty that mimics nature'
				/>
				<GalleryPreview />
			</div>
		</>
	);
};
export default HomePage;

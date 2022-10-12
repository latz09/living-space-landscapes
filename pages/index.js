import Hero from '../components/layout/heros/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
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
					'Creating your landscape with a naturalistic style. Boulders, stones, japanese gardening, patios, pathways'
				}
			/>
			<div className='grid gap-4 pb-8 justify-items-center bg-gray-50 pt-16'>
				<Hero />
				<Philosophy />

				<div className='flex space-x-3 w-full max-w-3xl mx-auto text-center items-center'>
					<div className='w-1/2 px-1 xs:px-2'>
						<ButtonLink title='Our Process' href={'/our-process'} />
					</div>
					<div className='w-1/2 px-1 xs:px-2'>
						<ButtonLink title='Why us' href={'/why-us'} />
					</div>
				</div>
				<JapaneseHero />
				<div className='py-8 lg:h-[60vh] grid place-items-center gap-3'>
					<Reviews />

					<SocialReviewSectionLinks />
				</div>
				<StoneHero />
				<GalleryPreview />
			</div>
		</>
	);
};
export default HomePage;

import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import GalleryPreview from '../components/gallery/GalleryPreview';
import Reviews from '../components/reviews/Reviews';
import StoneHero from '../components/layout/hero/StoneHero';
import JapaneseHero from '../components/layout/hero/JapaneseHero';
import Meta from '../components/utils/Meta';

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

				<div className='flex space-x-4 w-full max-w-3xl mx-auto text-center '>
					<div className='w-1/2 px-2'>
						<ButtonLink title='Our Process' href={'/our-process'} />
					</div>
					<div className='w-1/2 px-2'>
						<ButtonLink title='Why us' href={'/why-us'} />
					</div>
				</div>
				<JapaneseHero />
				<Reviews />
				<StoneHero />
				<GalleryPreview />
			</div>
		</>
	);
};

export default HomePage;

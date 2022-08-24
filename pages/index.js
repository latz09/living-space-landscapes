import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import GalleryPreview from '../components/gallery/GalleryPreview';
import Reviews from '../components/reviews/Reviews';

const HomePage = () => {
	return (
		<div className='grid gap-4 pb-8 justify-items-center bg-gray-50 pt-16'>
			<Hero />
			<Philosophy />
			<div className='flex space-x-4'>
				<ButtonLink title='Explore Services' href={'/services'} />
				<ButtonLink title='Why choose us' href={'/why-us'} />
			</div>
			<Reviews />
			<GalleryPreview />
		</div>
	);
};

export default HomePage;

import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/homepage/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import Carousel from '../components/carousel/Carousel';
import SectionHeading from '../components/utils/SectionHeading';

const HomePage = () => {
	return (
		<div className='grid gap-4 mb-24 justify-items-center mt-4'>
			<Hero />

			<Philosophy />

			<div className='flex space-x-3'>
				<ButtonLink title='Set up Consultation' href={'/contact'} />
				<ButtonLink title='Services' href={'/services'} />
			</div>
			<SectionHeading title='Gallery' />
			<Carousel />
			<ButtonLink title='Full Gallery' href={'/gallery'} />
		</div>
	);
};

export default HomePage;

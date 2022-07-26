import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/homepage/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import Carousel from '../components/carousel/Carousel';
import SectionHeading from '../components/utils/SectionHeading';
import Reviews from '../components/reviews/Reviews';

const HomePage = () => {
	return (
		<div className='grid gap-4 mb-24 justify-items-center mt-4'>
			<div className='grid justify-items-center xl:flex xl:p-8 w-screen '>
				<Hero />

				<Philosophy />
			</div>

			<div className='flex space-x-3'>
				<ButtonLink title='Set up Consultation' href={'/contact'} />
				<ButtonLink title='Services' href={'/services'} />
			</div>
			<div className='min-h-screen grid justify-items-center'>
				<div className='grid lg:grid-cols-2 gap-8 m-7 '>
					<Reviews />
				</div>
				<div>
					<ButtonLink title='All Reviews' href={'/reviews'} />
				</div>
			</div>

			<SectionHeading title='Gallery' />
			<Carousel />
			<ButtonLink title='Full Gallery' href={'/gallery'} />
		</div>
	);
};

export default HomePage;

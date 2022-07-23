import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/homepage/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import Carousel from '../components/carousel/Carousel';
import SectionHeading from '../components/utils/SectionHeading';
import ScrollUp from '../components/utils/ScrollUp';

const HomePage = () => {
	return (
		<div className='grid gap-4 mb-24 justify-items-center mt-4 md:mt-12'>
			<div className='relative h-full z-0 '>
				<Hero />
				<div className='absolute inset-0 z-10 sm:flex hidden sm:justify-end sm:items-center sm:mr-12 sm:mt-12'>
					<ButtonLink
						title='Set up Consultation'
						href={'/contact'}
						styles={
							'border-2 border-landscape-300 hover:opacity-95  hover:border-gray-600 shadow-xl shadow-black'
						}
					/>
				</div>
			</div>
			<Philosophy />
			<div className='flex space-x-3'>
				<ButtonLink title='Set up Consultation' href={'/contact'} />
				<ButtonLink title='Services' href={'/services'} />
			</div>
			<SectionHeading title='Gallery' />
			<Carousel />
			<ButtonLink title='Full Gallery' href={'/gallery'} />
			<ScrollUp href={'/'}/>
			
		</div>
	);
};

export default HomePage;

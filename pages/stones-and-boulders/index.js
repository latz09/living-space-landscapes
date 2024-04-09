import BoulderSection from '../../components/stones-and-boulders/BoulderSection';
import PageHero from '../../components/utils/PageHero';
import heroImage from '../../public/images/stones-and-boulders-two/3.jpg';
import { stonesAndBoulderData } from '../../data/stonesAndBoulders';

const StonesAndBoulders = () => {
	return (
		<div className='grid gap-8 mb-8 lg:gap-16 lg:mb-16 '>
			
			<PageHero heroImage={heroImage} heroTitle={'Stones and Boulders'} />
			<div className="mx-auto	">
				<p className="prose mx-4 text-xl lg:text-2xl text-center  leading-7 md:leading-8  px-2 font-logo">
					Boulders and natural stones play an important part in our landscape
					installations. The impact of carefully placed boulders gives the
					landscape year-round interest and creates a powerful timeless beauty
					that mimics nature.
				</p>
			</div>
			<div>
				<BoulderSection data={stonesAndBoulderData} />
			</div>
		</div>
	);
};

export default StonesAndBoulders;

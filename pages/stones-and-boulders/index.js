import BoulderSection from '../../components/stones-and-boulders/BoulderSection';
import PageHero from '../../components/utils/PageHero';
import heroImage from '../../public/images/stones-and-boulders-two/3.jpg';
import { stonesAndBoulderData } from '../../data/stonesAndBoulders';

const StonesAndBoulders = () => {
	return (
		<div className='grid gap-20 mb-20 '>
			{/* will be new component */}{' '}
			<PageHero heroImage={heroImage} heroTitle={'Stones and Boulders'} />
			<div>
				<p className="prose mx-auto md:text-lg text-gray-600 leading-8 tracking-wide text-justify px-2">
					Boulders and natural stones play an important part of our landscape
					installations. The impact of carefully placed boulders give the
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

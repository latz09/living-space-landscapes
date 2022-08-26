import Image from 'next/image';
import stoneHero from '../../../public/images/gallery-images/17.jpg';
import ButtonLink from '../../utils/ButtonLink';

const StoneHero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={stoneHero}
					alt=''
					priority='true'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					placeholder='blur'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
				<div className='grid gap-4 text-center tracking-widest text-gray-50 max-w-5xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-logo text-landscape-500'>
						Natural Stones and Boulders
					</h1>
					<span className='text-left text-lg md:text-2xl mx-12 '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
						aliquet risus feugiat in ante. Interdum varius sit amet mattis
						vulputate.
					</span>
					<div className="md:w-1/3 mx-auto ">
						<ButtonLink href={'/contact'} title={'Contact us'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoneHero;

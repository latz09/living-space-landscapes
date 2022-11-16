import Image from 'next/image';
import stoneHero from '../../../public/images/gallery-images/old-website-images/17.jpg';
import ButtonLink from '../../utils/ButtonLink';
const StoneHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={stoneHero}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black/60'>
				<div className='grid gap-4 place-items-center tracking-widest text-white/80'>
					<h1 className='text-4xl md:text-7xl font-logo text-landscape-500'>
						Stones and Boulders
					</h1>
					<span className='text-lg md:text-2xl mx-4 text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
						aliquet risus feugiat in ante.
					</span>
					<div className='my-4'>
						<ButtonLink href={'/japanese-gardens'} title={'Learn More'} />
					</div>
				</div>
			</div>

			{/* <div className='relative h-full bg-black bg-opacity-40'>
				<div className=' tracking-widest text-gray-50 '>
					<h1 className='text-5xl md:text-7xl font-logo text-landscape-500'></h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
					risus feugiat in ante. Interdum varius sit amet mattis vulputate.
					<div className=' '></div>
				</div>
			</div> */}
		</div>
	);
};
export default StoneHero;

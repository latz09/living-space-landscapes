import Image from 'next/image';
import japaneseHero from '../../../public/images/gallery-images/12.jpg';
import ButtonLink from '../../utils/ButtonLink';
const JapaneseHero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={japaneseHero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					placeholder='blur'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
				<div className='grid gap-4 text-center tracking-widest text-gray-50 max-w-5xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-logo text-landscape-500'>
						Japanese Gardens
					</h1>
					<span className=' text-left text-lg md:text-2xl mx-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
						aliquet risus feugiat in ante.
					</span>
					<div className='md:w-1/3 mx-auto '>
						<ButtonLink href={'/japanese-gardens'} title={'Learn More'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default JapaneseHero;

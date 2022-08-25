import Image from 'next/image';
import serviceHero from '../../../public/images/gallery-images/11.jpg';

const ServiceHero = () => {
	return (
		<div className='relative w-full h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={serviceHero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='grid gap-4 text-center tracking-widest text-gray-50'>
					<h1 className='text-5xl md:text-7xl font-logo text-landscape-500'>
						Services
					</h1>
					<span className=' text-lg md:text-2xl mx-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
						aliquet risus feugiat in ante. Interdum varius sit amet mattis
						vulputate.
					</span>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;

import Image from 'next/image';
import serviceHero from '../../../public/images/gallery-images/58.jpg';
const ServiceHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={serviceHero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
				<div className='grid gap-4 text-center tracking-widest text-gray-50'>
					<h1 className='text-5xl md:text-7xl font-logo text-landscape-500'>
						Our Process
					</h1>
				</div>
			</div>
		</div>
	);
};
export default ServiceHero;

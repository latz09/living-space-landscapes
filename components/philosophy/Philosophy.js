import Text from './Text';
import ButtonLink from '../utils/ButtonLink';

const Philosophy = () => {
	return (
		<div className='max-w-5xl mx-auto grid gap-12 lg:gap-16'>
			<div className='grid gap-4  justify-items-center items-center  max-w-3xl mx-auto '>
				<h1 className='font-logo  text-4xl text-landscape-700 '>Our Philosophy</h1>
				<Text />
			</div>
			<div className='grid gap-6 lg:gap-8 lg:flex  w-full px-2 lg:justify-evenly'>
				<span className='w-2/3 lg:w-4/5 mx-auto  '>
					<ButtonLink title='Our Process' href={'/our-process'} />
				</span>
				<span className='w-2/3 lg:w-4/5 mx-auto  '>
					<ButtonLink title='About Us' href={'/about-us'} />
				</span>
			</div>
		</div>
	);
};
export default Philosophy;

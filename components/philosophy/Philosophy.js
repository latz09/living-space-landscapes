import Text from './Text';
import ButtonLink from '../utils/ButtonLink';

const Philosophy = () => {
	return (
		<>
			<div className='grid gap-4 lg:grid-cols-2 justify-items-center items-center text-justify tracking-widest'>
				<h1 className='font-logo  text-4xl text-landscape-700 '>Philosphy</h1>
				<Text />
			</div>
			<div className='flex space-x-4 w-full px-2 lg:justify-evenly'>
				<span className='w-full lg:w-1/3   '>
					<ButtonLink title='our process' href={'/our-process'} />
				</span>
				<span className='w-full lg:w-1/3  '>
					<ButtonLink title='about us' href={'/about-us'} />
				</span>
			</div>
		</>
	);
};
export default Philosophy;
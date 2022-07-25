import { philosophy } from '../../data/philosophy';
import SectionHeading from '../utils/SectionHeading';

const Philosophy = () => {
	return (
		<div className='flex items-center mr-4 md:mr-0 mt-8'>
			<div className='prose grid justify-items-center text-gray-600 text-opacity-80 md:flex lg:grid items-center space-x-7'>
				<SectionHeading title='Our Philosophy' />
				<div className='text-sm text-justify sm:text-base leading-5 tracking-wider md:text-lg font-serif  py-3 px-1 '>
					<p>
						<span className='text-landscape-700 font-extrabold'>{`"`}</span>{' '}
						{philosophy}
						<span className='text-landscape-700 font-extrabold '>{`"`}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Philosophy;

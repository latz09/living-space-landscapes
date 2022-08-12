import { philosophy } from '../../data/philosophy';
import SectionHeading from '../utils/SectionHeading';

const Philosophy = () => {
	return (
		<div className='text-gray-500 grid prose font-long text-justify'>
			<p className=' text-xl'>
				We create your landscape with a{' '}
				<span className='text-landscape-700 '>naturalistic style </span>that
				will inspire a sense of{' '}
				<span className='text-landscape-700 '>calm </span>in those who
				experience it. The landscape should provide highly{' '}
				<span className='text-landscape-700 '> restorative garden views</span>{' '}
				from inside the building and develop a desire to{' '}
				<span className='text-landscape-700'> explore the outdoor </span>
				space. The ideal landscape will connect the indoor and outdoor spaces
				into a well used{' '}
				<span className='text-landscape-700'> living space </span> that captures
				your <span className='text-landscape-700'> imagination </span> and gives
				you a sense of <span className='text-landscape-700'> serenity</span>.
			</p>
		</div>
	);
};

export default Philosophy;

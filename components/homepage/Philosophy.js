import { philosophy } from '../../data/philosophy';
import SectionHeading from '../utils/SectionHeading';

const Philosophy = () => {
	return (
		<div className='grid md:grid-cols-2 justify-items-center items-center my-6 text-justify'>
			<h1 className='font-logo text-4xl text-landscape-700'>Philosphy</h1>
			<div className='text-gray-500 grid prose font-sans tracking-wide  '>
				<p className='text-base  md:text-xl px-3'>
					We create your landscape with a{' '}
					<span className='text-landscape-700 '>naturalistic style </span>that
					will inspire a sense of{' '}
					<span className='text-landscape-700 '>calm </span>in those who
					experience it. The landscape should provide highly restorative garden
					views from inside the building and develop a desire to explore the
					outdoor space. The ideal landscape will{' '}
					<span className='text-landscape-700'>connect</span> the indoor and
					outdoor spaces into a well used living space that captures your
					imagination and gives you a sense of{' '}
					<span className='text-landscape-700'> serenity</span>.
				</p>
			</div>
		</div>
	);
};

export default Philosophy;

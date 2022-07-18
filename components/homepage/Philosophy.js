import { philosophy } from '../../data/philosophy';

const Philosophy = () => {
	return (
		<div className="p-4 border-b border-landscape-300">
			<div className='prose grid  md:flex items-center space-x-7'>
				<h1 className='text-2xl md:text-3xl text-center text-landscape-700 prose'>
					Our Philosophy
				</h1>
				<p className="text-sm sm:text-base leading-5 tracking-wider md:text-lg font-serif">{philosophy}</p>
			</div>
		</div>
	);
};

export default Philosophy;

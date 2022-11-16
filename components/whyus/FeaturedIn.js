import SectionHeading from '../utils/SectionHeading';
const FeaturedIn = ({ articles }) => {
	return (
		<div className='grid gap-4 mt-8 mx-4 lg:mt-0 lg:flex lg:justify-center  lg:items-center max-w-7xl lg:mx-auto w-full'>
			<div className='lg:w-1/3 grid place-items-center'>
				<SectionHeading title='Featured In' />
			</div>
			<ul className='grid text-justify  gap-5 text-lg italic text-landscape-700 mt-4 grow'>
				{articles.map((article) => (
					<li
						className='bg-landscape-500 bg-opacity-20 font-bold shadow-md mr-4 p-1 text-sm sm:text-lg'
						key={article}
					>
						{article}
					</li>
				))}
			</ul>
		</div>
	);
};
export default FeaturedIn;

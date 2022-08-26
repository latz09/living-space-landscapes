import SectionHeading from '../utils/SectionHeading';
const FeaturedIn = ({ articles }) => {
	return (
		<div className='text-center md:flex justify-center space-x-12 items-center'>
			<SectionHeading title='Featured In' />
			<ul className='grid text-justify  gap-5 text-lg italic text-landscape-700 mt-4'>
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

import SectionHeading from '../utils/SectionHeading';
const FeaturedIn = ({ articles }) => {
	return (
		<div className='grid gap-8 place-items-center'>
			<div className=' text-center'>
				<SectionHeading title='Featured In' />
			</div>
			<ul className='grid text-justify  gap-4 text-lg italic text-landscape-700 '>
				{articles.map((article) => (
					<li
						className='bg-landscape-500 bg-opacity-20 font-bold shadow-md mx-4 px-4 py-2 text-sm sm:text-lg'
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

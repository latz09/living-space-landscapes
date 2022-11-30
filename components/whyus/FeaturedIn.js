import SectionHeading from '../utils/SectionHeading';
const FeaturedIn = ({ articles }) => {
	return (
		<div className='grid gap-4 lg:grid-cols-5 place-items-center lg:max-w-5xl mx-auto w-ful'>
			<div className='lg:col-span-2'>
				<SectionHeading title='Featured In' />
			</div>
			<ul className='lg:col-span-3 grid text-justify  gap-4 text-lg italic text-landscape-700 '>
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

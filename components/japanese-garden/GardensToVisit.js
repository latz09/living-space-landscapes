import SectionHeading from '../utils/SectionHeading';

const GardensToVisit = ({ data }) => {
	return (
		<div className=' grid gap-16  bg-landscape-300/20 py-16'>
			<div className='grid gap-8 max-w-7xl mx-4 xl:mx-auto '>
				<SectionHeading title='Gardens To Visit' />
				<div className='grid xl:grid-cols-5 gap-8 place-items-center xl:place-items-start'>
					<div className='prose text-justify xl:col-span-3 text-gray-600 text-base xl:text-lg'>{data.intro}</div>
					<div className='xl:col-span-2 grid gap-2 text-landscape-700 '>					
						{data.gardens.map((garden, index) => (
							<div key={index}>{garden}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GardensToVisit;

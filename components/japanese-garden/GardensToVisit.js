import SectionHeading from '../utils/SectionHeading';

const GardensToVisit = ({ data }) => {
	return (
		<div className=' grid gap-16  bg-landscape-300/20 py-16'>
			<div className='grid gap-8 max-w-7xl mx-4 xl:mx-auto '>
				<SectionHeading title='Gardens to Visit' />
				<div className='grid xl:grid-cols-5 gap-8 place-items-center xl:place-items-start'>
					<p className='lg:w-4/5 mx-auto leading-7 text-justify xl:col-span-3  text-base xl:text-lg'>{data.intro}</p>
					<div className='xl:col-span-2 grid gap-2 text-landscape-700 font-bold'>					
						{data.gardens.map((garden, index) => (
							<div key={index}>- {garden}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GardensToVisit;

import BoulderCard from './BoulderCard';

const BoulderSection = ({ data }) => {
	return (
		<div className='grid gap-16 max-w-7xl mx-auto'>
			{data.map((item) => (
				<div key={item.id} className=' grid place-items-center py-12 border-t border-landscape-500 '>
					
						<BoulderCard
							heading={item.heading}
							images={item.images}
							description={item.description}
						/>
					
				</div>
			))}
		</div>
	);
};

export default BoulderSection;

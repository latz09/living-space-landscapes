import ImagesDisplay from './ImagesDisplay';


const BoulderCard = ({ heading, images, description }) => {
	return (
		<div className='grid gap-12 '>
			<h3 className='text-xl lg:text-2xl  text-center  text-landscape-700 px-2'>{heading}</h3>

			<div className=''>
				<ImagesDisplay images={images} description={description} />
			</div>
		</div>
	);
};

export default BoulderCard;

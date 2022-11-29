import Image from 'next/image';

const ExtraImages = ({ data }) => {
	return (
		<div className='max-w-7xl mx-auto grid gap-8 md:gap-0 md:grid-cols-2 place-items-center '>
			{data.map((image, index) => (
				<div key={index} className='md:w-4/5 grid place-items-center shadow-lg'>
					<Image src={image} alt='Japanese Garden Examples' priority='true' />
				</div>
			))}
		</div>
	);
};
export default ExtraImages;

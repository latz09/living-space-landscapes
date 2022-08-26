import Image from 'next/image';
const ImageItem = ({ image, alt }) => {
	return (
		<div className='hover:scale-110 lg:hover:scale-125 md:p-12 transition duration-1000'>
			<div className='shadow-lg  grid items-center '>
				<Image src={image} alt={alt} layout='intrinsic' placeholder='blur' />
			</div>
		</div>
	);
};
export default ImageItem;

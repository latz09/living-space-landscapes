import Image from 'next/image';

const ImageModal = ({ src, alt }) => {
	return (
		<div>
			<div>
				<Image src={src} alt={alt} />
			</div>
		</div>
	);
};

export default ImageModal;

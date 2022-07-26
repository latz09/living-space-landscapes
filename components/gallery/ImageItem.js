import Image from 'next/image'

const ImageItem = ({image}) => {
    return ( <>
    <Image src={image} alt='' layout='intrinsic' width={500} height={400}/>
    </> );
}
 
export default ImageItem;
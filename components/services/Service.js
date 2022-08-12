import Image from 'next/image';
import SectionHeading from '../utils/SectionHeading';
import ButtonLink from '../utils/ButtonLink';

const Service = ({ title, image, description }) => {
	return (
		<>
			<div className='my-7 text-center border-y border-landscape-700 py-3'>
				<SectionHeading
					title={title}
					style={'text-2xl'}
					styles={'text-3xl md:text-4xl'}
				/>
			</div>

			<div className='sm:grid grid-cols-3'>
				<p className=' col-span-2 description'>{description}</p>
				<div className='grid justify-items-center md:justify-items-end py-8 mr-2'>
					<Image
						src={`/${image}`}
						alt={`Image of ${title}`}
						width={240}
						height={195}
					/>
				</div>
			</div>
		</>
	);
};

export default Service;

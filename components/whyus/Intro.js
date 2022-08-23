import Image from 'next/image';
import SectionHeading from '../utils/SectionHeading';
import WhyUsHeading from '../utils/WhyUsHeading';
import Certifications from './Certifications';
import Memberships from './Memberships';

const Intro = ({
	name,
	image,
	alt,
	about,
	degree,
	certifications,
	memberships,
}) => {

	return (
		<div className='grid gap-4 justify-items-center md:justify-items-start justify-around md:flex p-4 max-w-4xl mx-auto  border-l-4 md:pl-12 border-landscape-300'>
			<div className='grid gap-4 justify-items-between'>
				<div className='text-gray-400 tracking-wide'>
					<SectionHeading title={name} />
					<h1 className='mb-2'>{degree}</h1>
					<div className='grid gap-3'>
						<Certifications certifications={certifications} />
						<Memberships memberships={memberships} />
					</div>
				</div>
				<div>
					<WhyUsHeading title='Background' />
					<div className='prose text-gray-500 sm:text-base tracking-wide text-justify mr-8'>
						<p>{about}</p>
					</div>
				</div>
			</div>
			<div className='self-center p-2 shadow-lg grid italic'>
				<span>
					<Image
						src={image}
						alt={alt}
						height={300}
						width={200}
						layout='intrinsic'
					/>
				</span>
				<span className='text-center text-gray-500'>Scott</span>
			</div>
		</div>
	);
};

export default Intro;

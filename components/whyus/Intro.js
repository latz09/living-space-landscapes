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
		<div className='text-gray-400 border-l-4 md:pl-12 max-w-7xl mx-auto border-landscape-300 grid gap-4 lg:grid-cols-2 lg:gap-16 lg:place-items-center'>
			<div className='m-4 grid gap-6 '>
				<div className='lg:hidden grid gap-4'>
					<SectionHeading title={name} />
					<h1 className='text-center'>{degree}</h1>
				</div>
				<div className='lg:m-8'>
					<Image src={image} alt={alt} layout='intrinsic' priority='true' />
				</div>
			</div>

			<div className='tracking-wide grid gap-4 mx-4'>
				<div className='hidden lg:grid gap-4'>
					<SectionHeading title={name} />
					<h1 className=''>{degree}</h1>
				</div>
				<div className='grid gap-4'>
					<Certifications certifications={certifications} />
					<Memberships memberships={memberships} />
				</div>

				<div className='grid gap-2'>
					<WhyUsHeading title='background' />
					<div className='text-gray-600  sm:text-base  tracking-wide text-justify font-logo'>
						<p>{about}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Intro;

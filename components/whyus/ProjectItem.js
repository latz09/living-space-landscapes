import Image from 'next/image';
import SectionHeading from '../utils/SectionHeading';

const ProjectItem = ({ name, description, location, image }) => {
	return (
		<>
			<div className=''>
				<SectionHeading title={name} />

				<Image
					src={image}
					alt={`image of ${name}`}
					height={400}
					width={500}
					layout='intrinsic'
				/>

				<div>{description}</div>
				<div>{location}</div>
			</div>
		</>
	);
};

export default ProjectItem;

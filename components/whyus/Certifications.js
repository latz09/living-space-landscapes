import WhyUsHeading from '../utils/WhyUsHeading';

const Certifications = ({ certifications }) => {
	return (
		<div className='grid'>
			<WhyUsHeading title='certifications' />
			<ul className='text-gray-400 tracking-wide text-sm'>
				{certifications.map((cert) => (
					<li key={cert}>{cert}</li>
				))}
			</ul>
		</div>
	);
};

export default Certifications;

import WhyUsHeading from '../utils/WhyUsHeading';
const Certifications = ({ certifications }) => {
	return (
		<div className='grid gap-2'>
			<WhyUsHeading title='Certifications' />
			<ul className='text-gray-400 tracking-wide text-sm grid gap-1'>
				{certifications.map((cert) => (
					<li key={cert}>{cert}</li>
				))}
			</ul>
		</div>
	);
};
export default Certifications;

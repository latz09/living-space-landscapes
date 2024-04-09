
const CopyRight = () => {
	// Get the current year
	const currentYear = new Date().getFullYear();

	return (
		<div className='text-center pb-2 mt-16 '>
		
			<a
				href='https://www.latzwebdesign.com'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center justify-center gap-2 font-logo text-[#001D20]'
			>
				<p >
					© {currentYear} by Living Space Landscapes. Handcrafted with care by{' '}
					<span className='font-black font-spaces tracking-wide'>LatzWebDesign.</span>
				</p>
			</a>
		</div>
	);
};

export default CopyRight;
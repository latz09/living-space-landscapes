const SectionHeading = ({ title }) => {
	return (
		<h1
			className={`text-center lg:text-left text-3xl md:text-4xl  text-landscape-700 font-semibold tracking-wider border-b border-landscape-700 pb-4 `}
		>
			{title}
		</h1>
	);
};
export default SectionHeading;

const Mailto = ({ email, subject, body, cc, ...props }) => {
	return (
		<a href={`mailto:${email}?cc=${cc}&subject=${subject || ''}&body=${body || ''}`}>
			{props.children}
		</a>
	);
};

export default Mailto;
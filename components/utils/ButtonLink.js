import Link from 'next/link';

const ButtonLink = ({ href, title, styles }) => {
	return (
		<Link href={href}>
			<div className={`button-link ${styles}`}>
				<span>{title}</span>
			</div>
		</Link>
	);
};

export default ButtonLink;

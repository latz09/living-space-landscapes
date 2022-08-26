import Link from 'next/link';
const ButtonLink = ({ href, title }) => {
	return (
		<Link href={href}>
			<div className='button-link'>
				<span>{title}</span>
			</div>
		</Link>
	);
};
export default ButtonLink;

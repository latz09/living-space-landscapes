import Link from 'next/link';

const ContactUsLink = () => {
	return (
		<Link href={'/contact'}>
			<div className='contact-us'>
				<span>Contact Us</span>{' '}
			</div>
		</Link>
	);
};

export default ContactUsLink;

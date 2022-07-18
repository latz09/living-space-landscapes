import Link from 'next/link';

const ContactUsLink = () => {
	return (
		<Link href={'/'}>
			<div className='contact-us'>
				<span>Contact Us</span>{' '}
			</div>
		</Link>
	);
};

export default ContactUsLink;

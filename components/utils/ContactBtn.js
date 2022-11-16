import Link from 'next/link';

const ContactButton = () => {
	return (
		<Link href={'/contact'}>
			<a className=' text-2xl  px-2 py-1   '>
				Contact us
			</a>
		</Link>
	);
};

export default ContactButton;

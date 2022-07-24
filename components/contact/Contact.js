import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';


const Contact = ({ name, number, email }) => {
	return (
		<div className='grid gap-2'>
			<div className='mt-4'>{name}</div>
			<div className='grid'>
				<div className='flex space-x-2 items-center'>
					{' '}
					<AiOutlinePhone />
					<span>{number}</span>
				</div>
				<div className='flex space-x-2 items-center'>
					{' '}
					<AiOutlineMail />
					<span>{email}</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;

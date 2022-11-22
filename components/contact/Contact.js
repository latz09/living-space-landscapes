import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
const Contact = ({ name, number, email }) => {
	return (
		<div className='grid gap-2 border-b pb-4  border-landscape-500/40 lg:pt-4 '>
			<div className=' text-xl'>{name}</div>

			<div className='grid'>
				{' '}
				<span className="font-bold">
					<AiOutlinePhone />
				</span>
				<span className='font-bold'>{number}</span>
			</div>
			<div className='grid'>
				{' '}
				<span>
					<AiOutlineMail />
				</span>
				<span className='font-bold'>{email}</span>
			</div>
		</div>
	);
};
export default Contact;

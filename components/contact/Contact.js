import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
const Contact = ({ name, number, email }) => {
	return (
		<div className='grid gap-2 border-b pb-4  border-landscape-500/40 lg:pt-4 '>
			<div className='flex space-x-4 items-center justify-between'>
				<span className=' text-xl font-bold'>{name}</span>
				<div className='flex space-x-4'>
					<span>
						<AiOutlinePhone />{' '}
					</span>
					<span>
						<AiOutlineMail />{' '}
					</span>
				</div>
			</div>
			<span className=''>{number}</span>
			<span className=''>{email}</span>
		</div>
	);
};
export default Contact;

import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactSegment = ({ contacts }) => {
	const scott = contacts[0];
	const megan = contacts[1];

	return (
		<div className='grid '>
			<div className='[&>*]:grid [&>*]:gap-2 [&>*]:border-b  [&>*]:border-landscape-500/40  '>
				<div className='bg-landscape-700 text-white p-2 tracking-wider rounded'>
					<div className="grid text-lg text-center  font-logo tracking-wider">
						<span>
							To arrange for a consultation or design contact
						</span>

						<span className='mx-8 font-bold'>
							{megan.name} at:
						</span>
					</div>
					<div className='flex items-center space-x-4'>
						<span>
							<AiOutlinePhone />{' '}
						</span>

						<span>{megan.phoneNumber}</span>
					</div>
					<div className='flex items-center space-x-4'>
						<span>
							<AiOutlineMail />{' '}
						</span>

						<span>{megan.email}</span>
					</div>
				</div>
				<div className='px-2 py-8'>
					<span>{scott.name}</span>
					<div className='flex items-center space-x-4'>
						<span>
							<AiOutlinePhone />{' '}
						</span>

						<span>{scott.phoneNumber}</span>
					</div>
					<div className='flex items-center space-x-4'>
						<span>
							<AiOutlineMail />{' '}
						</span>

						<span>{scott.email}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSegment;

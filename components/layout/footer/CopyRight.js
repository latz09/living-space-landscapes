import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const CopyRight = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='flex space-x-2 items-center text-sm font-sans text-landscape-700  '>
			Copyright{' '}
			<span className='mx-1 '>
				<AiOutlineCopyrightCircle />{' '}
			</span>{' '}
			{currentYear} Living Space LandScapes{' '}
		</div>
	);
};

export default CopyRight;

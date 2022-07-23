import Link from 'next/link';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollUp = ({href}) => {
	return (
		<div className='cursor-pointer text-3xl text-landscape-300 text-center'>
			<Link href={href}>
				<AiOutlineArrowUp />
			</Link>
		</div>
	);
};

export default ScrollUp;

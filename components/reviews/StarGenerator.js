import { v4 as uuid } from 'uuid';
import { FaStar } from 'react-icons/fa';

const StarGenerator = (rating) => {
	const stars = rating.rating;

	return (
		<div className="flex space-x-1 text-yellow-400">
			{[...Array( stars )].map((star) => (
				<div key={uuid() + star}>
					<FaStar />
				</div>
			))}
		</div>
	);
};

export default StarGenerator;

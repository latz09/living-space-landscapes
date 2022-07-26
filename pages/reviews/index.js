import Reviews from '../../components/reviews/Reviews';
import PageHeading from '../../components/utils/PageHeading';
import SectionHeading from '../../components/utils/SectionHeading';

const ReviewsPage = () => {
	return (
		<>
			<PageHeading title='Reviews' />
			<div className='grid gap-8 my-7 '>
				<Reviews />
			</div>
		</>
	);
};

export default ReviewsPage;

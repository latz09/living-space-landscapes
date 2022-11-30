import WhyUsHeading from '../utils/WhyUsHeading';
const Memberships = ({ memberships }) => {
	return (
		<div className="grid gap-2">
			<WhyUsHeading title='memberships' />
			{memberships.map((membership) => (
				<div key={membership.organization}>
					<div className='text-landscape-700 text-lg'>
						{membership.organization}
					</div>
					<div> {membership.full} </div>
				</div>
			))}
		</div>
	);
};
export default Memberships;

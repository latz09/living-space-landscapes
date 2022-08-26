const Form = () => {
	return (
		<div className='p-4 text-landscape-700 shadow-lg  border py-14'>
			<div className='grid gap-9 md:gap-4 justify-items-center'>
				<p className='text-lg font-bold text-center pb-8'>
					{' '}
					Our designer will contact you and schedule a consultation and to
					gather more information about your project{' '}
				</p>
				<p className='text-center'>{`Enter your email and/or phone number and we'll connect you with the right person`}</p>
				<form className='grid w-80 mt-3 gap-4'>
					<input
						type='email'
						className='border border-landscape-300 focus:ring-landscape-700 focus:border-landscape-700 text-gray-700'
						placeholder='email'
						required={true}
					/>
					<input
						type='text'
						className='border border-landscape-300 focus:ring-landscape-700 focus:border-landscape-700 text-gray-700'
						placeholder='phone number'
					/>
					<button className='p-2 bg-landscape-700 text-white text-xl hover:bg-opacity-70 transition duration-700'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
export default Form;

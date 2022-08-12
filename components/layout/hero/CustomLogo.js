import ButtonLink from '../../utils/ButtonLink';

const CustomLogo = () => {
	return (
		<div className=' bg-white bg-opacity-90 xs:p-3 lg:hidden p-3'>
			<div className='flex text-7xl lg:text-8xl space-x-1 justify-center font-logo '>
				<h1 className='mt-2 md:mt-5 text-landscape-300 '> Living</h1>
				<div className='text-landscape-700 grid items-center justify-items-center'>
					<div>space</div>
					<div className='text-xl tracking-widest '>LANDSCAPES</div>
				</div>{' '}
			</div>
			<div className='flex justify-center space-x-3 items-center '>
				<ButtonLink title='Why us!' href={'/why-us'}  />
				<ButtonLink title='Services' href={'/services'}  />
				<ButtonLink title='Contact' href={'/contact'}  />
			</div>
		</div>
	);
};

export default CustomLogo;

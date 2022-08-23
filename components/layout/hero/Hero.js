import Image from 'next/image';
import heroImage from '../../../public/images/yards/patio-red-chairs.jpg';
import logo from '../../../public/images/logos/logo.jpg'
// import ButtonLink from '../../utils/ButtonLink';

const Hero = () => {
	return (
		<div className='relative w-[100vw] h-[75vh]'>
			<div className='-z-10  '>
				<Image
					src={heroImage}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority='true'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className=''>

					<Image src ={logo} alt=''/>
					{/* <div className='flex text-5xl md:text-7xl lg:text-8xl space-x-1 p-4'>
						<h1 className='mt-2 md:mt-5 text-landscape-300'> Living</h1>
						<div className='text-landscape-700 grid items-center justify-items-center'>
							<div>space</div>
							<div className='text-xl tracking-widest '>LANDSCAPES</div>
						</div>{' '}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Hero;

{
	/* <div className='relative'>
			<div className='z-0 '>
				<Image src={heroImage} alt='' layout='' priority={true} />
			</div>

			<div className='absolute inset-0  z-10 bg-white  bg-opacity-10 hidden lg:grid grid-cols-2 justify-items-center font-logo'>
				<div className='mt-4 red-400 grid  place-items-center px-3'>
					<div className='4  bg-white bg-opacity-90 b-2 r-2 border landscape-700 shadow-2xl  xs:p-3'>
						<div className='flex text-5xl md:text-7xl lg:text-8xl space-x-1 p-4'>
							<h1 className='mt-2 md:mt-5 text-landscape-300'> Living</h1>
							<div className='text-landscape-700 grid items-center justify-items-center'>
								<div>space</div>
								<div className='text-xl tracking-widest '>LANDSCAPES</div>
							</div>{' '}
						</div>
					</div>

					<div className=' hidden lg:flex items-center space-x-3'>
						<ButtonLink
							title='Why us!'
							href={'/why-us'}
							styles='px-7 xl:px-12 text-2xl  font-spaces'
						/>

						<ButtonLink
							title='Services'
							href={'/services'}
							styles='px-7 xl:px-12 text-2xl  font-spaces'
						/>
						<ButtonLink
							title='Contact'
							href={'/contact'}
							styles='px-5 xl:px-12 text-2xl  font-spaces'
						/>
					</div>
				</div>
			</div>
		</div> */
}

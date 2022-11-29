import Image from 'next/image';

const JapaneseSection = ({ data }) => {
	const credentials = data[0];
	const ourWork = data[1];
	console.log(credentials);

	return (
		<div className='grid gap-16  '>
			<div className='grid max-w-7xl mx-auto gap-8 bg-landscape-300/20 shadow-lg  pb-12 lg:pb-0'>
				<div className='grid lg:grid-cols-5 gap-8 place-items-center'>
					<div className='lg:col-span-2 grid place-items-center '>
						<Image src={credentials.image} alt='two landscapers working in a japanese gaden' priority='true' />
					</div>
					<div className='grid text-lg prose text-justify mx-4 lg:col-span-3 lg:w-4/5 '>
						<span className='jap-section-heading'>{credentials.heading}</span>
						<p className='jap-section-content md:leading-7'>{credentials.text}</p>
					</div>
				</div>
			</div>
			<div className='grid max-w-7xl mx-auto gap-8 lg:border-t py-8 border-landscape-700/50 '>
				<div className='grid lg:grid-cols-5 gap-8 place-items-center'>
					<div className='grid text-lg prose text-justify mx-4 lg:col-span-3 lg:w-4/5 '>
						<span className='jap-section-heading'>{ourWork.heading}</span>
						<p className='jap-section-content'>{ourWork.text}</p>
					</div>
					<div className='lg:col-span-2'>
						<Image src={ourWork.image} alt='explaing the process of japanese gardening' priority='true' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JapaneseSection;

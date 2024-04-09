import Image from 'next/image';

const JapaneseSection = ({ data }) => {
	const credentials = data[0];
	const ourWork = data[1];

	return (
		<div className='grid gap-16  '>
			<div className='grid  gap-8 bg-landscape-300/20 shadow-lg  pb-12 lg:pb-0'>
				<div className='grid lg:grid-cols-5 gap-8 place-items-center max-w-7xl mx-auto lg:py-12'>
					<div className='lg:col-span-2 grid place-items-center shadow-lg  shadow-landsc'>
						<Image
							src={credentials.image}
							alt='two landscapers working in a japanese gaden'
							priority={true}
						/>
					</div>
					<div className='grid text-lg prose text-justify mx-4 lg:col-span-3 lg:w-4/5'>
						<span className='jap-section-heading'>{credentials.heading}</span>
						<p className='jap-section-content '>
							{credentials.text}
						</p>
					</div>
				</div>
			</div>
			<div className='grid max-w-7xl mx-auto gap-8 lg:border-t pt-8 lg:pb-8 border-landscape-700/50 '>
				<div className='grid lg:grid-cols-5 gap-8 place-items-center'>
					<div className='grid text-lg prose text-justify mx-4 lg:col-span-3 lg:w-4/5 '>
						<span className='jap-section-heading'>{ourWork.heading}</span>
						<div>
							<p className='jap-section-content'>{ourWork.text}</p>
							<p className='jap-section-content'>{ourWork.textTwo}</p>
						</div>
					</div>
					<div className='lg:col-span-2 grid place-items-center shadow-lg shadow-landscape-700/40'>
						<Image
							src={ourWork.image}
							alt='explaining the process of japanese gardening'
							priority={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JapaneseSection;

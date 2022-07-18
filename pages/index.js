import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/homepage/Philosophy';
import ContactUsLink from '../components/utils/ContactUsLink';

const HomePage = () => {
	return (
		<div className='grid gap-4 mb-24 justify-items-center '>
			<div>
				<Hero />
			</div>
			<div className='grid place-content-center'>
				<Philosophy />
			</div>
			<div className='h-72 w-full bg-landscape-700 text-center'> images</div>
			<div>
				<ContactUsLink />
			</div>
		</div>
	);
};

export default HomePage;

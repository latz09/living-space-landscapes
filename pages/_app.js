import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<div className='max-w-6xl mx-auto font-spaces'>
			<Layout>
				<div className=''>
					<Component {...pageProps} />
				</div>
			</Layout>
		</div>
	);
}

export default MyApp;

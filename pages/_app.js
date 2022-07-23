import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<div className='font-spaces'>
			<Layout>
				<div className=''>
					<Component {...pageProps} />
				</div>
			</Layout>
		</div>
	);
}

export default MyApp;

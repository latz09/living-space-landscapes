import Head from 'next/head';

const Meta = ({ pageTitle, description }) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='description' content={description} />
		</Head>
	);
};

export default Meta;

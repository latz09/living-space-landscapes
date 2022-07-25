import SectionHeading from '../utils/SectionHeading';

const FeaturedIn = ({articles}) => {
    console.log(articles)
	return (
		<div className="text-center md:flex justify-center space-x-12 items-center">
			<SectionHeading title='Featured In' />
          <ul className="grid text-justify gap-5 text-lg italic text-landscape-700">
            {articles.map(article => (
                <li className="bg-landscape-500 bg-opacity-20 font-bold shadow-md  p-1" key={article}>{article}</li>
            ))}
          </ul>

		</div>
	);
};

export default FeaturedIn;

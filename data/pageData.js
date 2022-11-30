import designImage from '../public/images/design/design-meeting.jpg';
import installationImage from '../public/images/design/installation.jpg';
import pruningImage from '../public/images/design/aesthetic-pruning.jpg';
import heroImage from '../public/images/gallery-images/old-website-images/58.jpg';
import japHeroImage from '../public/images/japanese-gardens/5.jpg';
import credentialImage from '../public/images/japanese-gardens/1.JPEG';
import ourWorkImage from '../public/images/japanese-gardens/2.JPEG';
import extraImageOne from '../public/images/japanese-gardens/3.JPEG';
import extraImageTwo from '../public/images/japanese-gardens/4.JPEG';

export const ourProcessPageData = [
	{
		metaPageTitle: 'Our Process',
		metaPageDescription:
			'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.',
		heroImage: heroImage,
		heroTitle: 'Our Process',
		sections: [
			{
				title: 'Design',
				description:
					'A landscape design is more than a map of which plants go where. A great design should complement the architecture of the home and provide harmony with nature, connecting the indoor and outdoor spaces. The well thought out design will create garden views from inside the home and include a carefully selected plant list specific for the project. Appropriate plants chosen for the soil conditions, available sunlight and attention to seasonal interest are all considered during the design phase. Plant material has certain requirements in order to thrive. The physical limitations and requirements of a site always need to be understood and met. All things considered, Living Space Landscapes can creatively design your landscape to be a source of pleasure to you and your friends, not a burden or an anxiety.',
				image: designImage,
			},
			{
				title: 'Installation',
				description:
					'Living Space Landscapes applies horticulturally correct methods of soil preparation and planting at each project. We take pride in combining the artistic arrangements of plants and skilled boulder setting. Our craftsmanship really shows in the labor intensive, cut-to-fit natural stone patios or walkways. When it is all complete, your landscape should give you a sense of connection with nature and a way of escaping from all your troubles. Just a simple stroll through your new landscape should provide mental restoration and reward you with an overall mood of quiet elegance surrounded by natural beauty.',
				image: installationImage,
			},
			{
				title: 'Aesthetic Pruning',
				description:
					'Sculpting of Japanese influenced garden trees, or niwaki has become a finely honed art with a distinctive set of pruning techniques. In-ground giant bonsai or Hindu-Pan style evergreens are skillfully hand pruned every year. These specimen trees rely on craftsmanship, horticultural knowledge, and a sense of proportion and balance to maintain their shape. Without the trained eye of an experienced gardener to monitor the pruning needs, the giant bonsai trees will revert back to a natural growth rate and lose the essence of its design and intent. Living Space Landscapes takes care of many bonsai garden trees in the Twin Cities area. Other Minnesota landscape companies also commission us to provide the aesthetic pruning for their clients that have giant bonsai trees.',
				image: pruningImage,
			},
		],
	},
];

export const japaneseProcessPageData = {
	heroImage: japHeroImage,
	intro:
		'For centuries, Japanese gardens have evoked the joy and beauty of nature.  A well designed and constructed garden becomes a highly restorative destination.   Living Space Landscapes has a passion for creating residential landscapes inspired by the elements of a Japanese garden.  Boulder placement, cut-to-fit irregular shaped flagstone paths, gently raised berms, dry creeks and thoughtfully designed plant selection all play a part in the wonderment and delight of experiencing a landscape heavily influenced by the Japanese garden experience.',
	credentialSections: [
		{
			id: 1,
			heading: 'How it started',
			image: credentialImage,
			text: 'Living Space Landscapes owner, Scott Solomonson was introduced to the inspiring world of Japanese gardens when he was living in Portland Oregon in his twenties.  Scott was hired by Hoichi Kurisu to be part of the design team for Kurisu International.  Hoichi Kurisu is highly regarded as one of the most influential Japanese garden designers worldwide.',
		},
		{
			id: 2,
			heading: 'Skills and CraftsmanShip',
			image: ourWorkImage,
			text: 'Later, Scott worked side by side with other Japanese trained garden builders in Portland learning the skill and craftmanship of creating quality Japanese gardens.  Two former Japanese Landscape Directors of the Portland Japanese Garden both started their own companies.  Toru Tanaka, Japanese Garden Specialty and Masa Mizuno, Masa and Associates were both very influential for Scott in honing the skills required to create and maintain a great Japanese garden.  ',
			textTwo: '20+ years later, Scott and his talented crew at Living Space Landscapes are always improving on there combined skill sets to provide beautiful landscapes that use the design and refined craftmanship needed to create a landscape that is inspired by authentic Japanese gardens.  We have been honored to work at several private beautiful gardens in the Twin Cities.'
		},
	],
	gardensToVisit: {
		intro:
			'In Minnesota, we are fortunate to have several highly ranked quality public Japanese Gardens to visit.  Over the last decade Living Space Landscapes has worked closely with Japanese trained garden consultant John Powell to help make renovations and improvements to these public Japanese gardens in the Minnesota:',
		gardens: [
			'Charlotte Partridge Ordway Japanese Garden at Como Park St Paul MN.',
			'The Japanese Garden Jo-Ryo-EnCarlton College, Northfield MN.',
			'Normandale Community College Japanese Garden Bloomington MN.',
		],
	},
	extraPhotos: [extraImageOne, extraImageTwo],
};

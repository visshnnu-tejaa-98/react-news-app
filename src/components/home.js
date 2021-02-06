import NavBar from './NavBar';
import { useState } from 'react';
import Article from './Article';
const HomePage = () => {
	let category = [
		'automobiles',
		'business',
		'fashion',
		'food',
		'health',
		'home',
		'insider',
		'magazine',
		'movies',
		'nyregion',
		'obituaries',
		'politics',
		'realestate',
		'science',
		'sports',
		'sundayreview',
		'technology',
		'theater',
		't-magazine',
		'travel',
		'upshot',
		'us',
		// 'world',
	];
	const [heading, setHeading] = useState('Hamara News');
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [first, setFirst] = useState(true);

	const getData = async (cat) => {
		let url = `https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=bn25GR0JgVJk4bHLBK8pPtrYc5czNKvX`;
		try {
			let apiResponse = await fetch(url);
			let apiData = await apiResponse.json();
			setArticles(apiData.results);
			// console.log(apiData.results);
			return apiData.results;
		} catch (err) {
			console.log(err);
		}
	};
	// getData('fashion');

	const modifyHeading = (article) => {
		let modifiedText = article[0].toUpperCase() + article.slice(1);
		setFirst(false);
		setHeading(`Hamara ${modifiedText} News`);
		// setArticles(article);
		console.log(article);
		setLoading(true);
		getData(article).then((data) => {
			console.log(data);

			setLoading(false);
		});
	};

	return (
		<div>
			<NavBar />
			<h1 className='container text-center my-5'>
				<i className='fas fa-newspaper'></i> {heading}
			</h1>
			<section className='container'>
				<div className='row '>
					<div className='col col-3 side-bar'>
						{category.map((item, id) => (
							<p
								className='side-bar-item'
								key={id}
								value={item}
								onClick={(e) => modifyHeading(e.target.textContent)}
							>
								{item}
							</p>
						))}
					</div>
					<div className='col col-9 '>
						{first && <h1>Please, select any category in sidebar to get NEWS</h1>}
						{loading && <h1 className='text-center'>Loading...</h1>}
						{articles &&
							!loading &&
							articles.map((article, id) => (
								<Article
									key={id}
									section={article.section}
									title={article.title}
									byline={article.byline}
									setDate={article.date}
									abstract={article.abstract}
									url={article.multimedia[0].url}
									IMGurl={article.url}
								/>
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BookRecommendation(props) {
	const [recommendation, setRecommendation] = useState([]);
	const { discoverGenres } = useParams();
	useEffect(() => {
		let genresArray = discoverGenres.split(',');
		const randomGenreIndex = Math.floor(Math.random() * genresArray.length);
		const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genresArray[randomGenreIndex]}&maxResults=40&key=${process.env.REACT_APP_API_KEY}
        `;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const randomBookIndex = Math.floor(Math.random() * res.items.length);
				console.log(res.items[randomBookIndex]);
				setRecommendation(res.items[randomBookIndex]);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='book-rec-container'>
			{/* {recommendation === [] ? (
				<h2>Book loading...</h2>
			) : (
				<div>
					<h2>{recommendation.volumeInfo.title}</h2>
					<h3>{recommendation.volumeInfo.authors.join(', ')}</h3>
					<p>{recommendation.volumeInfo.description}</p>
				</div>
			)} */}
		</div>
	);
}

export default BookRecommendation;

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

	function createMarkup(html) {
		return { __html: html };
	}

	return (
		<div className='book-rec-container'>
			{recommendation.volumeInfo ? (
				<div>
                    {recommendation.volumeInfo.imageLinks.smallThumbnail ? (<img src={recommendation.volumeInfo.imageLinks.smallThumbnail} alt="" />) : (<h4>No Image</h4>)}

					<h2>{recommendation.volumeInfo.title}</h2>
					<h3>{recommendation.volumeInfo.authors.join(', ')}</h3>
					<div
						dangerouslySetInnerHTML={createMarkup(
							recommendation.volumeInfo.description
						)}></div>
				</div>
			) : (
				<h2>Book loading...</h2>
			)}
		</div>
	);
}

export default BookRecommendation;

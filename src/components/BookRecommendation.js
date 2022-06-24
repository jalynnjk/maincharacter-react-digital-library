import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookRecommendation(props) {
	const [recommendation, setRecommendation] = useState([]);
	const { discoverGenres } = useParams();
	useEffect(() => {
		let genresArray = discoverGenres.split(',');
		const randomGenreIndex = Math.floor(Math.random() * genresArray.length);
		const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genresArray[randomGenreIndex]}&maxResults=4`;
		// key=${process.env.REACT_APP_API_KEY}
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const randomBookIndex = Math.floor(Math.random() * res.items.length);
				setRecommendation(res.items[randomBookIndex]);
			})
			.catch(console.error);
	}, []);

	function createMarkup(html) {
		return { __html: html };
	}

	return (
		<div className='details-container'>
			<Link className='return-link' to='/'>
				<button className='return-button'>Return</button>
			</Link>
			{recommendation.volumeInfo ? (
				<div className='book-details'>
					{recommendation.volumeInfo.imageLinks.smallThumbnail ? (
						<img
							className='book-image'
							src={recommendation.volumeInfo.imageLinks.smallThumbnail}
							alt='Book Cover'
						/>
					) : (
						<h4 className='book-image'>No Image Available</h4>
					)}
					<div className='book-titles-container'>
						{recommendation.volumeInfo.title ? (
							<h2>{recommendation.volumeInfo.title}</h2>
						) : (
							<h2>Title Unknown</h2>
						)}
						{recommendation.volumeInfo.authors ? (
							<h3>{recommendation.volumeInfo.authors.join(', ')}</h3>
						) : (
							<h3>Author(s) Unknown</h3>
						)}
					</div>
					{recommendation.volumeInfo.description ? (
						<div
							dangerouslySetInnerHTML={createMarkup(
								recommendation.volumeInfo.description
							)}></div>
					) : null}
				</div>
			) : (
				<h2>Book loading...</h2>
			)}
		</div>
	);
}

export default BookRecommendation;

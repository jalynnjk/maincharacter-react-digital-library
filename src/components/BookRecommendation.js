import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookRecommendation(props) {
	const [recommendation, setRecommendation] = useState([]);
	const { discoverGenres } = useParams();
	useEffect(() => {
		let genresArray = discoverGenres.split(',');
		const randomGenreIndex = Math.floor(Math.random() * genresArray.length);
		const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genresArray[randomGenreIndex]}&maxResults=4&key=${process.env.REACT_APP_API_KEY}`
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const randomBookIndex = Math.floor(
					Math.random() * (res.items.length - 1)
				);
				setRecommendation(res.items[randomBookIndex].volumeInfo);
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
			{recommendation.title ? (
				<div className='book-details'>
					<img
						className='book-image'
						src={recommendation.imageLinks.smallThumbnail}
						alt='Book Cover'
					/>
					<div className='book-titles-container'>
						<h2 className='book-title'>{recommendation.title}</h2>
						{recommendation.authors ? (
							<h2 className='book-authors'>
								{recommendation.authors.join(', ')}
							</h2>
						) : (
							<h2>Author Unknown</h2>
						)}
					</div>
					<div
						className='book-description'
						dangerouslySetInnerHTML={createMarkup(
							recommendation.description
						)}></div>
				</div>
			) : (
				<h2>Book details loading...</h2>
			)}
		</div>
	);
}

export default BookRecommendation;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BookDetails(props) {
	const [bookData, setBookData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const url = `https://www.googleapis.com/books/v1/volumes/${id}?&key=${process.env.REACT_APP_API_KEY}`
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setBookData(res.volumeInfo);
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
			{bookData.title ? (
				<div className='book-details'>
					<img
						className='book-image'
						src={bookData.imageLinks.smallThumbnail}
						alt='Book Cover'
					/>
					<div className='book-titles-container'>
						<h2 className='book-title'>{bookData.title}</h2>
						{bookData.authors ? (
							<h2 className='book-authors'>{bookData.authors.join(', ')}</h2>
						) : (
							<h2>Author Unknown</h2>
						)}
					</div>
					<div
						className='book-description'
						dangerouslySetInnerHTML={createMarkup(bookData.description)}></div>
				</div>
			) : (
				<h2>Book details loading...</h2>
			)}
		</div>
	);
}

export default BookDetails;

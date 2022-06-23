import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BookDetails(props) {
	const [bookData, setBookData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
		console.log(url);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.volumeInfo);
				setBookData(res.volumeInfo);
			})
			.catch(console.error);
	}, []);

    function createMarkup(html) {
        return {__html: html}
    }

	return (
		<div>
			{bookData.title ? (
				<div>
					<img src={bookData.imageLinks.smallThumbnail} alt='' />
					<h2>{bookData.title}</h2>
					{bookData.authors ? (
						<h2>{bookData.authors.join(', ')}</h2>
					) : (
						<h2>Author Unknown</h2>
					)}
					<div dangerouslySetInnerHTML={createMarkup(bookData.description)}></div>
				</div>
			) : (
				<h2>Book details loading...</h2>
			)}
		</div>
	);
}

export default BookDetails;

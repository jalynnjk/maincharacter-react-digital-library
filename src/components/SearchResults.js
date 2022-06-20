import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Route} from 'react-router-dom'

function SearchResults({ searchInput }) {
	const [books, setBookData] = useState([]);
	function getBookData() {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput.searchBy}${searchInput.searchValue}&maxResults=40&key=${process.env.REACT_APP_API_KEY}
        `;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.items);
				setBookData(res.items);
			})
			.catch(console.error);
	}
	useEffect(() => {
		getBookData();
	}, [searchInput]);
	return (
		    <div>
		    	{books.map((book, index) => {
		    		return (
							<Link to={`/details/${book.id}`} key={index}>
								<div className='bookContainer'>
									<div className='image-container'>
										{book.volumeInfo.imageLinks ? (
											<img
												src={book.volumeInfo.imageLinks.smallThumbnail}
												alt=''
											/>
										) : (
											<h4>No Image</h4>
										)}
									</div>
									<div className='book-info'>
										<h3>{book.volumeInfo.title}</h3>
										{book.volumeInfo.authors ? (
											<h4>{book.volumeInfo.authors.join(', ')}</h4>
										) : (
											<h4>Author Unknown</h4>
										)}
									</div>
								</div>
							</Link>
						);
		    	})}
		    </div>
	);
}

export default SearchResults;

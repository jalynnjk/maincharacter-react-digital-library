import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Discover from './Discover';

function SearchResults({ searchInput, setSearchInput }) {
    //Custom hook setBooks fetch
	const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([])
	function getBookData() {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput.searchBy}${searchInput.searchValue}&maxResults=40&key=${process.env.REACT_APP_API_KEY}
        `;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res.items);
			})
			.catch(console.error);
	}
	useEffect(() => {
		getBookData();
	}, [searchInput]);
    //searchInput, pass into dependency array pass as argument to custom hook
	return (
		<div className='search-results-container'>
			<Discover selectedBooks={selectedBooks} />
			{books.map((book, index) => {
				return (
					<div className='bookContainer' key={index}>
						<Link className='search-image-link' to={`/details/${book.id}`}>
							<div className='image-container'>
								{book.volumeInfo.imageLinks ? (
									<img className='search-result-image' src={book.volumeInfo.imageLinks.smallThumbnail} alt='' />
								) : (
									<h4>No Image</h4>
								)}
							</div>
						</Link>
						<button onClick={() => {
                            return selectedBooks.length < 3 ? setSelectedBooks([...selectedBooks, book]) : null}
                    }>+</button>
                        <div className='book-info'>
							<Link to={`/details/${book.id}`}>
								<h3>{book.volumeInfo.title}</h3>
							</Link>
							{book.volumeInfo.authors ? (
								<h4 onClick={() => setSearchInput({searchBy: 'author:', searchValue:book.volumeInfo.authors})}>
									{book.volumeInfo.authors.join(', ')}
								</h4>
							) : (
								<h4>Author Unknown</h4>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchResults;

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Discover from './Discover';
import Card from 'react-bootstrap/Card';

function SearchResults({ searchInput, setSearchInput }) {
	//Custom hook setBooks fetch
	const [books, setBooks] = useState([]);
	const [selectedBooks, setSelectedBooks] = useState([]);
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
		books ? (books.map((book, index) => {
			return (
				<Card className='search-result-card' key={index}>
					{book.volumeInfo.imageLinks ? (
						<Link to={`/details/${book.id}`}>
							<Card.Img
								className='sr-card-img'
								variant='top'
								src={book.volumeInfo.imageLinks.smallThumbnail}
							/>
						</Link>
					) : null}
					<Card.Body className='sr-card-body'>
						<button
							onClick={() => {
								return selectedBooks.length < 3
									? setSelectedBooks([...selectedBooks, book])
									: null;
							}}>
							+
						</button>
						<Link to={`/details/${book.id}`}>
							<Card.Title className='sr-card-title'>
								{book.volumeInfo.title}
							</Card.Title>
						</Link>
						<Card.Subtitle
							className='sr-card-subtitle'
							onClick={() =>
								setSearchInput({
									searchBy: 'author:',
									searchValue: book.volumeInfo.authors,
								})
							}>
							{book.volumeInfo.authors ? (
								<h4
									onClick={() =>
										setSearchInput({
											searchBy: 'author:',
											searchValue: book.volumeInfo.authors,
										})
									}>
									{book.volumeInfo.authors.join(', ')}
								</h4>
							) : (
								<h4>Author Unknown</h4>
							)}
						</Card.Subtitle>
					</Card.Body>
				</Card>
			);
		})) : (<h2>Your search did not return any books</h2>)
	);
}

export default SearchResults;

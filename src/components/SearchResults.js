import Discover from './Discover';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

function SearchResults({ searchInput, setSearchInput }) {
	const [books, setBooks] = useState([]);
	const [selectedBooks, setSelectedBooks] = useState([]);
	function getBookData() {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput.searchBy}${searchInput.searchValue}&maxResults=40&key=${process.env.REACT_APP_API_KEY}`
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
	return (
		<div>
			<Discover
				selectedBooks={selectedBooks}
				setSelectedBooks={setSelectedBooks}
			/>
			<div className='discover-container'>
				{books ? (
					books.map((book, index) => {
						return (
							<div className='search-result-container' key={index}>
								<div className='card-container'>
									{book.volumeInfo.imageLinks ? (
										<Link to={`/details/${book.id}`}>
											<img
												className='sr-img'
												variant='top'
												src={book.volumeInfo.imageLinks.smallThumbnail}
												alt='Book Cover'
											/>
										</Link>
									) : null}
									<div className='sr-body'>
										<button
											className='add-button'
											onClick={() => {
												return selectedBooks.length < 3
													? setSelectedBooks([...selectedBooks, book])
													: null;
											}}>
											+
										</button>
										<Link className='title-link' to={`/details/${book.id}`}>
											<h2 className='sr-title'>{book.volumeInfo.title}</h2>
										</Link>
										<div
											className='sr-subtitle'
											onClick={() =>
												setSearchInput({
													searchBy: 'author:',
													searchValue: book.volumeInfo.authors,
												})
											}>
											{book.volumeInfo.authors ? (
												<h4
													className='authors'
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
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<h2 className='did-not-return'>
						Your search did not return any books. Please check your spelling or
						try using a different keyword.
					</h2>
				)}
			</div>
		</div>
	);
}

export default SearchResults;

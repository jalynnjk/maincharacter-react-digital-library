import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Discover({ selectedBooks, setSelectedBooks }) {
	const [discoverGenres, setDiscoverGenres] = useState([]);
	useEffect(() => {
		if (selectedBooks.length >= 1) {
			selectedBooks.map((selectedBook) => {
				selectedBook.volumeInfo.categories == undefined
					? setDiscoverGenres(discoverGenres)
					: setDiscoverGenres([
							...discoverGenres,
							...selectedBook.volumeInfo.categories,
					  ]);
			});
		}
	}, [selectedBooks]);

	return (
		<div className='discover-container'>
			<div className='selected-book-list-container'>
				{selectedBooks.map((selectedBook, index) => {
					return (
						<div className='selected-book-container' key={index}>
							<img
								className='selected-book-img'
								src={selectedBook.volumeInfo.imageLinks.smallThumbnail}
								alt=''
							/>
						</div>
					);
				})}
			</div>
			{selectedBooks.length ? (
				<Link className='recommend-link' to={`/book-recommendation/${discoverGenres}`}>
					<button className='recommend-button'>disCOver</button>
				</Link>
			) : null}
		</div>
	);
}

export default Discover;

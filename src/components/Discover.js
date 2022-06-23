import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BookRecommendation from './BookRecommendation';

function Discover({ selectedBooks }) {
    const [discoverGenres, setDiscoverGenres] = useState([])
    useEffect(() => {
        if (selectedBooks.length >= 1){
        selectedBooks.map((selectedBook) => {	
            setDiscoverGenres([...discoverGenres, ...selectedBook.volumeInfo.categories])
			})}
    }, [selectedBooks])

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
							<h2 className='selected-book-title' key={index}>
								{selectedBook.volumeInfo.title}
							</h2>
						</div>
					);
				})}
			</div>
			{selectedBooks.length ? (
				<Link to={`/book-recommendation/${discoverGenres}`}>
					<button>Recommend</button>
				</Link>
			) : null}
		</div>
	);
}

export default Discover;

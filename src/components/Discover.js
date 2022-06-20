import React from 'react';
import { useState, useEffect } from 'react';
function Discover({ selectedBooks }) {
	console.log('this is the selected book', selectedBooks);
	return (
		<div>
			{selectedBooks.map((selectedBook, index) => {
				return(
                <div className='selected-book-container'>
                    <img src={selectedBook.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                    <h2 key={index}>{selectedBook.volumeInfo.title}</h2>
                </div>)
			})}
		</div>
	);
}

export default Discover;

import React from 'react';
import { useState, useEffect } from 'react';
function Discover({ selectedBooks }) {
	console.log('this is the selected book', selectedBooks);
	return (
		<div className='discover-container'>
            <div className='selected-book-list-container'>
                {selectedBooks.map((selectedBook, index) => {
                    return(
                            <div className='selected-book-container'>
                                <img className='selected-book-img' src={selectedBook.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                                <h2 className='selected-book-title' key={index}>{selectedBook.volumeInfo.title}</h2>
                            </div>)
                })}
                    </div>
        <button>Discover</button>
        </div>
	);
}

export default Discover;

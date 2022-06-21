import React from 'react';
import { useState, useEffect } from 'react';
function Discover({ selectedBooks }) {
	return (
		<div className='discover-container'>
            <div className='selected-book-list-container'>
                {selectedBooks.map((selectedBook, index) => {
                    return(
                            <div className='selected-book-container' key={index}>
                                <img className='selected-book-img' src={selectedBook.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                                <h2 className='selected-book-title' key={index}>{selectedBook.volumeInfo.title}</h2>
                            </div>)
                })}
                    </div>
        {selectedBooks.length ? <button>Discover</button>:null}
        </div>
	);
}

export default Discover;

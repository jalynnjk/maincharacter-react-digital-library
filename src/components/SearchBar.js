import React from 'react';
import { useState } from 'react';
import SearchResults from './SearchResults';

function SearchBar(props) {
	const [searchInput, setSearchInput] = useState({
		searchBy: 'subject:',
		searchValue: 'fantasy',
	});
	const [formState, setFormState] = useState({ searchBy: 'title:', searchValue: '' });

	function handleSubmit(event) {
		event.preventDefault();
		setSearchInput(formState);
	}
	return (
		<div>
			<form className='searchbar' onSubmit={handleSubmit}>
				<select
					id='searchBy'
					value={formState.searchBy}
					onChange={(event) => {
						setFormState({
							...formState,
							[event.target.id]: event.target.value,
						});
					}}>
					<option value='title:'>Title</option>
					<option value='author:'>Author</option>
					<option value='subject:'>Genre</option>
				</select>
				<input
					type='text'
					id='searchValue'
					value={formState.searchValue}
					onChange={(event) => {
						setFormState({
							...formState,
							[event.target.id]: event.target.value,
						});
					}}
				/>
				<button id='search-btn'>Search</button>
			</form>
			<SearchResults searchInput={searchInput} />
		</div>
	);
}

export default SearchBar;

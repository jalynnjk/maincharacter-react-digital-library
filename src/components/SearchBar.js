import React from 'react';
import { useState } from 'react';
import QuickSearch from './QuickSearch';
import SearchResults from './SearchResults';

function SearchBar(props) {
	const [searchInput, setSearchInput] = useState({
		searchBy: 'subject:',
		searchValue: ['Fiction'],
	});
	const [formState, setFormState] = useState({
		searchBy: 'title:',
		searchValue: [''],
	});

	function handleSubmit(event) {
		event.preventDefault();
		setSearchInput(formState);
		setFormState({ ...formState, searchValue: [''] });
	}

	return (
		<div className='search-container'>
			<QuickSearch searchInput={searchInput} setSearchInput={setSearchInput} />

			<form className='searchbar' onSubmit={handleSubmit}>
				<select
					id='searchBy'
					value={formState.searchBy}
					onChange={(event) => {
						setFormState({
							...formState,
							[event.target.id]: [event.target.value],
						});
					}}>
					<option value='title:'>Title</option>
					<option value='author:'>Author</option>
					<option value='subject:'>Genre</option>
				</select>
				<input
					type='text'
					id='searchValue'
					placeholder='Search'
					value={formState.searchValue}
					onChange={(event) => {
						setFormState({
							...formState,
							[event.target.id]: [event.target.value],
						});
					}}
				/>
				<button id='search-btn'>Search</button>
			</form>
			<h4>| {searchInput.searchValue.join(' | ')} |</h4>
			<SearchResults
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>
		</div>
	);
}

export default SearchBar;

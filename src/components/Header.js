import React from 'react';
import logo from '../assets/spellbook.png';

function Header(props) {
	return (
		<div className='header-grid-template'>
			<h1 className='h1'>Main Character</h1>
			<img className='openbook-logo' src={logo} alt='open book clipart' />{' '}
			<h2 className='search-link'>Search</h2>
			<h2 className='discover-link'>Discover</h2>
		</div>
	);
}

export default Header;

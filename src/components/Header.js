import React from 'react';
import logo from '../assets/spellbook.png';
import {Link} from 'react-router-dom'

function Header(props) {
	return (
		<div className='header-grid-template'>
			<h1 className='h1'>Main Character</h1>
			<img className='openbook-logo' src={logo} alt='open book clipart' />{' '}
			<Link to='/search' className='search-link'>
                <h2 className='search-text'>Search</h2>
            </Link>
		</div>
	);
}

export default Header;

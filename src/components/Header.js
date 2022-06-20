import React from 'react';
import logo from '../assets/spellbook.png';
import {Link} from 'react-router-dom'

function Header(props) {
	return (
		<div className='header-grid-template'>
			<h1 className='h1'>Main Character</h1>
			<img className='openbook-logo' src={logo} alt='open book clipart' />{' '}
			<Link to='/search'>
                <h2 className='search-link'>Search</h2>
            </Link>
            <h2 className='discover-link'>Discover</h2>
		</div>
	);
}

export default Header;

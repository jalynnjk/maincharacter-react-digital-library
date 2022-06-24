import React from 'react';
import logo from '../assets/spellbook.png';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div className='header-grid-template'>
			<Link to='/search' className='home-link'>
				<h1>Main Character</h1>
			</Link>
			<img className='openbook-logo' src={logo} alt='open book clipart' />{' '}
		</div>
	);
}

export default Header;

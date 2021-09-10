import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleClick = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<>
			<nav className='navBar'>
				<Link to='/'>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1631066087/Portfolio/hero%20mockups/BuzzTraq/buzz-logo-dark_vv1wnx.png'
						alt='buzztraq logo'
						className='navBar-logo'
					/>
				</Link>
				<button className='menu-button' onClick={handleClick}>
					<div
						className={`menu-button-bars ${menuIsOpen ? 'open-menu' : ''}`}
					/>
					<div
						className={`menu-button-bars ${menuIsOpen ? 'open-menu' : ''}`}
					/>
					<div
						className={`menu-button-bars ${menuIsOpen ? 'open-menu' : ''}`}
					/>
					<div
						className={`menu-button-bars ${menuIsOpen ? 'open-menu' : ''}`}
					/>
				</button>
			</nav>
			<div className={`mobile-menu ${menuIsOpen ? 'show-menu' : ''}`}>
				<div className='mobile-menu-links'>
					<Link to='/' onClick={handleClick}>
						Home
					</Link>
					<a href='/#feature' onClick={handleClick}>
						Features
					</a>
					<Link to='/signup' onClick={handleClick}>
						Sign Up
					</Link>
				</div>
			</div>
			<div
				className={`page-shadow ${!menuIsOpen ? '' : 'fade-in'}`}
				onClick={handleClick}
			/>
		</>
	);
};

export default NavBar;

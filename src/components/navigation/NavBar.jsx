import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleClick = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<nav className='navBar'>
				<Link to='/' onClick={scrollToTop}>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1637118669/buzztraq/buzz-mark-highlight_tl05oq.svg'
						alt='buzztraq logo'
						className={`navBar-logo ${menuIsOpen ? 'navBar-logo-fixed' : ''}`}
					/>
				</Link>
				<div className='desktop-menu'>
					<div className='desktop-menu-links'>
						<Link to='/'>Home</Link>
						<a href='/#features'>Features</a>
						<Link to='/signup' className='styled-link' id='styled-link-desktop'>
							SIGN UP
						</Link>
					</div>
				</div>
				<button
					className={`menu-button ${menuIsOpen ? 'menu-button-fixed' : ''}`}
					onClick={handleClick}
				>
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
					<a href='/#features' onClick={handleClick}>
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

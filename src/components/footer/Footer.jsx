import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
const Footer = () => {
	return (
		<footer className='footer'>
			<Link to='/'>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1631072728/Portfolio/hero%20mockups/BuzzTraq/buzz-logo-white_ifcffz.png'
					alt='buzztraq logo'
					className='footer-logo'
				/>
			</Link>
			<p className='footer-text'>
				123 Main St
				<br />
				Anytown, CA 90210
				<br />
				Email: support@buzztraq.com
				<br />
				Phone: 1 (800) 555-BUZZ
			</p>
			<div className='footer-socials'>
				<a
					className='footer-socials-icon'
					href='https://github.com/kashchei23/buzztraq'
				>
					<i className='fab fa-github fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					href='https://www.linkedin.com/in/danielrbrown/'
				>
					<i className='fab fa-linkedin fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					href='https://portfolio-52086.firebaseapp.com/'
				>
					<i className='fas fa-briefcase fa-3x' />
				</a>
			</div>
			<p className='footer-footnote'>&copy; Daniel Brown 2021</p>
		</footer>
	);
};

export default Footer;

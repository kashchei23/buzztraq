import React, { useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import './ScrollUpButton.scss';

const ScrollUpButton = () => {
	const scrollToTop = () => {
		smoothscroll.polyfill();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const [isVisible, setVisibility] = useState(false);

	const toggleVisibility = (entry) => {
		if (entry.isIntersecting) {
			setVisibility(false);
		} else {
			setVisibility(true);
		}
		console.log(entry.isIntersecting);
	};
	const observeScroll = (element, callback) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => callback(entry));
		});

		observer.observe(element);
	};

	useEffect(() => {
		const scrollPadding = document.querySelector('.scroll-target');
		observeScroll(scrollPadding, toggleVisibility);
	}, []);

	return (
		<>
			<div className='scroll-target' />
			<button
				onClick={scrollToTop}
				type='button'
				className={`scroll-btn ${
					isVisible ? 'show-scroll fade' : 'hide-scroll'
				}`}
				aria-label='Scroll to top button'
			>
				<img
					className='scroll-button-image'
					src='https://res.cloudinary.com/obkidz/image/upload/v1631412584/icons/upload_abiy07.png'
					alt='scroll'
				/>
			</button>
		</>
	);
};

export default ScrollUpButton;

import React, { useRef } from 'react'; // useEffect // useState,

import './SplashPage.scss';

const SplashPage = () => {
	const splashRef = useRef(null);
	splashRef.current = '';

	const hidePage = () => {
		splashRef.current.setAttribute('class', 'splash splash-slide');
		window.scrollTo(0, 0);
		setTimeout(() => {
			splashRef.current.setAttribute('class', 'hide');
		}, 500);
	};
	return (
		<>
			<div className='splash' ref={splashRef}>
				<h1>NO MORE COUNTING</h1>
				<button
					onClick={hidePage}
					type='button'
					className='splash-scroll-btn'
					aria-label='Scroll to top button'
				>
					<img
						className='splash-scroll-btn-image'
						src='https://res.cloudinary.com/obkidz/image/upload/v1631412584/icons/upload_abiy07.png'
						alt='scroll'
					/>
				</button>
			</div>
		</>
	);
};

export default SplashPage;

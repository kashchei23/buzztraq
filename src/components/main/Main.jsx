import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};
	return (
		<>
			<div className='hero'>
				<div className='hero-content'>
					<div className='hero-content-text'>
						<h1>Calorie counting made easy</h1>
						<h3>
							Sign up now for your FREE trial to get real time calorie tracking.
						</h3>
						<Link to='/signup' className='styled-link' onClick={scrollToTop}>
							GET STARTED!
						</Link>
						<p>Available on Android and IOS.</p>
					</div>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/c_scale,w_500/v1631479060/Portfolio/hero%20mockups/BuzzTraq/buzztraq_mockup3_lj2j2z.png'
						alt='buzztraq watch face mockup'
						className='hero-content-img'
					/>
				</div>
			</div>
			<div className='main' id='features'>
				<h1>Get the latest features</h1>
				<section className='feature'>
					<div className='feature-content' id='feature-one'>
						<div className='feature-text' id='feature-text-one'>
							<h2>Innovation</h2>
							<p>
								BuzzTraq takes the work out of counting calories with innovative
								features that will help you reach your goals without worry, and
								instead with empowerment. Using the electrode sensors of your
								smart watch, state of the software monitors biometrical changes
								in the body.
							</p>
						</div>
						<img
							src='https://res.cloudinary.com/obkidz/image/upload/v1631250640/Portfolio/hero%20mockups/BuzzTraq/buzzwatch_f9kmat.gif'
							alt='buzztraq watch face mockup'
							className='feature-animated-img'
						/>
					</div>
				</section>
				<section className='feature' id='feature-blue-bg'>
					<div className='feature-content' id='feature-two'>
						<div className='feature-text'>
							<h2>Realtime tracking</h2>
							<p>
								BuzzTraq reads multiple forms of biometric data to keep you up
								to date at a moment’s glance. Calories consumed, burned, heart
								rate, and more are all tracked by the software. When goals have
								been met or exceeded, BuzzTraq provides a variety of tactile
								notifications to discreetly keep you informed.
							</p>
						</div>
						<img
							src='https://res.cloudinary.com/obkidz/image/upload/v1623093162/Portfolio/hero%20mockups/BuzzTraq/buzztraq_mockup-03_yerj1y.png'
							alt='buzztraq watch face mockup'
							className='feature-watch-still'
						/>
					</div>
				</section>
				<section className='feature'>
					<div className='feature-content' id='feature-three'>
						<div className='feature-text'>
							<h2>Seamless Integration</h2>
							<p>
								With the companion app available for desktop and mobile devices,
								data from the smartwatch is automatically transferred and stored
								via bluetooth. You can see your progress at a glance, share
								achievements and engage with others in the BuzzTraq community.
							</p>
						</div>
						<img
							src='https://res.cloudinary.com/obkidz/image/upload/v1631244511/Portfolio/hero%20mockups/BuzzTraq/iphone_buzz_tetd4o.png'
							alt='buzztraq phone app mockup'
							className='feature-phone-still'
						/>
					</div>
				</section>
				<section className='three-tiles'>
					<h1>Reach your goals</h1>
					<p>
						BuzzTraq includes these core features to inspire you on your
						journey.
					</p>
					<div className='tile-container'>
						<div className='tile'>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631156594/Portfolio/hero%20mockups/BuzzTraq/graph_fmlnvk.png'
								alt='feature icon'
								className='tile-img'
							/>
							<p>Realtime calorie tracking</p>
						</div>
						<div className='tile'>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631152274/Portfolio/hero%20mockups/BuzzTraq/watch_czk4la.png'
								alt='feature icon'
								className='tile-img'
							/>
							<p>Audio/Haptic feedback</p>
						</div>
						<div className='tile'>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631153174/Portfolio/hero%20mockups/BuzzTraq/community2_iyki5d.png'
								alt='feature icon'
								className='tile-img'
							/>
							<p>Community Support</p>
						</div>
					</div>
				</section>
			</div>
			<div className='mid-page-hero'>
				<div className='mid-page-hero-content'>
					<h1>Automatic calorie tracking</h1>
					<p>Learn more about the technology behind BuzzTraq</p>
					<Link to='/signup' onClick={scrollToTop}>
						Learn more<div className='middle-align'>{`>`}</div>
					</Link>
				</div>
			</div>
			<section className='final-cta'>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1623093162/Portfolio/hero%20mockups/BuzzTraq/buzztraq_mockup-01_yenjzj.png'
					alt='buzztraq watch face mockup'
					className='final-cta-img'
				/>
				<div className='final-cta-content'>
					<h1>Reimagine your lifestyle</h1>
					<p>
						With BuzzTraq, you no longer need to rely on manual calorie counting
						or worry about over-eating. Let us do the counting for you. Sign up
						today for your free trial!
					</p>
					<Link
						to='/signup'
						className='styled-link final-cta-button'
						onClick={scrollToTop}
					>
						START TODAY!
					</Link>
				</div>
			</section>
		</>
	);
};

export default Main;

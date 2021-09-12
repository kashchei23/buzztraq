import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
	return (
		<div className='app-container'>
			<div className='hero'>
				<div className='hero-content-wrapper'>
					<div className='hero-content'>
						<h1>Calorie counting made easy</h1>
						<h3>Sign up now for a free trial</h3>
						<p>Real time calorie tracking, available on Android and IOS.</p>
						<Link to='/signup' className='styled-link'>
							Sign up
						</Link>
					</div>
					<div className='hero-img' />
				</div>
			</div>
			<div className='main'>
				<section className='feature' id='feature-one'>
					<div className='feature-text' id='feature-text-one'>
						<h2>Innovation</h2>
						<p>
							BuzzTraq takes the work out of counting calories with innovative
							features that will help you reach your goals without worry, and
							instead with empowerment. Using the electrode sensors of your
							smart watch, state of the software monitors biometrical changes in
							the body.
						</p>
					</div>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1631250640/Portfolio/hero%20mockups/BuzzTraq/buzzwatch_f9kmat.gif'
						alt='buzztraq watch face mockup'
						className='feature-animated-img'
					/>
				</section>
				<section className='feature' id='feature-two'>
					<div className='feature-text'>
						<h2>Realtime tracking</h2>
						<p>
							BuzzTraq reads multiple forms of biometric data to keep you up to
							date at a moment’s glance. Calories consumed, burned, heart rate,
							and more are all tracked by the software. When goals have been met
							or exceeded, BuzzTraq provides a variety of tactile notifications
							to discreetly keep you informed.
						</p>
					</div>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1623093162/Portfolio/hero%20mockups/BuzzTraq/buzztraq_mockup-03_yerj1y.png'
						alt='buzztraq watch face mockup'
						className='feature-watch-still'
					/>
				</section>
				<section className='feature' id='feature-three'>
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
				</section>
				<section className='three-tiles'>
					<h1>Reach your goals</h1>
					<div className='tile-container'>
						<div>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631156594/Portfolio/hero%20mockups/BuzzTraq/graph_fmlnvk.png'
								alt='feature icon'
								className='tile'
							/>
							<p>Realtime macro tracking</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631152274/Portfolio/hero%20mockups/BuzzTraq/watch_czk4la.png'
								alt='feature icon'
								className='tile'
							/>
							<p>Audio/Haptic feedback</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/obkidz/image/upload/v1631153174/Portfolio/hero%20mockups/BuzzTraq/community2_iyki5d.png'
								alt='feature icon'
								className='tile'
							/>
							<p>Community Support</p>
						</div>
					</div>
				</section>
			</div>
			<div className='mid-page-hero'>
				<div className='mid-page-hero-content'>
					<h2>Calorie counting made easy</h2>
					<Link to='/signup'>
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
					<Link to='/signup' className='styled-link final-cta-button'>
						Sign up
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Main;
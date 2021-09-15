import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './SignUpForm.scss';
import { validateEmail, formatPhone } from './formValidation';

const initialState = {
	name: '',
	email: '',
	checkbox: false,
};

const initialPhoneState = '';
const SignUpForm = () => {
	const [user, setUser] = useState(initialState);
	const [phone, setPhone] = useState(initialPhoneState);
	const [regex, setRegex] = useState('');
	const [isFocused, setFocus] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const labelRefs = useRef([]);
	labelRefs.current = [];

	const getRefs = (el) => {
		if (el && !labelRefs.current.includes(el)) {
			labelRefs.current.push(el);
		}
	};

	const applyStyles = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				label.setAttribute('class', 'label label-animated');
			}
		}
	};
	const removeStyles = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				label.setAttribute('class', 'label');
			}
		}
	};

	const handleChange = (e) => {
		let value;
		switch (e.target.type) {
			case 'checkbox':
				value = e.target.checked;
				setUser({ ...user, [e.target.name]: value });
				break;
			case 'email':
			case 'text':
				value = e.target.value;
				setUser({ ...user, [e.target.name]: value });
				break;
			case 'tel':
				value = e.target.value;
				setPhone(value);
				break;
			default:
				value = '';
				break;
		}
		return value;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateEmail(user.email)) {
			setSubmitted(!isSubmitted);
		}
	};

	const handleFocus = (e) => {
		const inputValue = e.target.value;
		const inputName = e.target.name;

		applyStyles(inputName);

		if (inputValue === '') {
			setFocus(!isFocused);
		}

		// Instead of resetting field, try to remove dashes and
		// reset back to all numbers
		// if (inputName === 'phone') {
		// 	setPhone('');
		// }
	};

	const handleBlur = (e) => {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		if (inputValue === '') {
			setFocus(!isFocused);
			removeStyles(inputName);
		}

		//* formats string onBlur
		if (inputName === 'phone' && inputValue) {
			const formattedNumber = formatPhone(phone).number;
			const generatedRegex = formatPhone(phone).regex;

			setPhone(formattedNumber);
			setRegex(generatedRegex);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			{isSubmitted ? (
				<>
					<div className='modal modal-reveal'>
						<h2>Thanks {user.name}!</h2>
						<p>Check your email for confirmation!</p>
						<Link to='/' className='modal-close' onClick={scrollToTop}>
							Back to homepage
						</Link>
					</div>
					<div className='modal-shadow' />
				</>
			) : (
				''
			)}
			<div className='signup'>
				<div className='signup-container'>
					<form
						className='signup-form'
						autoComplete='off'
						onSubmit={handleSubmit}
					>
						<h1>Sign up for a FREE trial!</h1>
						<h3>Take charge of your health</h3>
						<div className='input-wrapper'>
							<label ref={getRefs} data-name='name' className='label'>
								Enter your name
							</label>
							<input
								type='text'
								name='name'
								value={user.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</div>
						<div className='input-wrapper'>
							<label ref={getRefs} data-name='phone' className='label'>
								Enter your phone number
							</label>
							<input
								type='tel'
								name='phone'
								maxLength={11}
								pattern={regex}
								title='Please only enter numbers. No spaces, dashes or special characters'
								value={phone}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</div>
						<div className='input-wrapper'>
							<label ref={getRefs} data-name='email' className='label'>
								Enter your email
							</label>
							<input
								type='email'
								name='email'
								value={user.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</div>
						<input
							type='checkbox'
							name='checkbox'
							checked={user.checkbox}
							onChange={handleChange}
						/>
						<label className='checkbox-label'>
							Subscribe to our newsletter
						</label>
						<button type='submit' className='signup-button'>
							Submit
						</button>
					</form>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1631479060/Portfolio/hero%20mockups/BuzzTraq/buzztraq_mockup3_lj2j2z.png'
						alt='buzztraq watch mockup'
						className='signup-img'
					/>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
//251

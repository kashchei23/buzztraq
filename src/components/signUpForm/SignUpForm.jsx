import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './SignUpForm.scss';
import {
	validateEmail,
	validatePhoneNumber,
	formatPhoneNumber,
} from '../../utility/formValidation';

const initialUserState = {
	name: '',
	email: '',
	checkbox: false,
};

const initialPhoneState = '';
const SignUpForm = () => {
	const [user, setUser] = useState(initialUserState);
	const [phone, setPhone] = useState(initialPhoneState);
	const [isFocused, setIsFocused] = useState(false);
	const [inputStatusMsg, setInputStatusMsg] = useState('');
	const [emailStatusMsg, setEmailStatusMsg] = useState('');
	const [phoneIsValid, setPhoneIsValid] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const activeInput = document.activeElement;
	const phoneRef = useRef(null);
	const myRef = useRef('');
	const labelRefs = useRef([]);
	labelRefs.current = [];

	useEffect(() => {
		setPhoneIsValid(validatePhoneNumber(phone));
	}, [phone, phoneIsValid]);

	useEffect(() => {
		setEmailIsValid(validateEmail(user.email));
	}, [user.email, emailIsValid]);

	useEffect(() => {
		if (isFocused) {
			animatePlaceholder(myRef.current.name);
		} else if (!isFocused && myRef.current.value === '') {
			removePlaceholderAnimation(myRef.current.name);
		}
	}, [activeInput, isFocused, myRef]);
	//* REMOVES DASHES FROM PHONE NUMBER FOR USER EDITING
	useEffect(() => {
		if (
			isFocused &&
			myRef.current.name === 'phone' &&
			myRef.current.value !== ''
		) {
			setPhone(myRef.current.value.replace(/-/g, ''));
		}
	}, [isFocused, myRef]);

	//* ADDS DASHES TO PHONE NUMBER
	useEffect(() => {
		const formattedNumber = formatPhoneNumber(phone);
		if (phoneIsValid && !isFocused) {
			setPhone(formattedNumber);
		}
	}, [phone, phoneIsValid, isFocused]);

	const getRefs = (el) => {
		if (el && !labelRefs.current.includes(el)) {
			labelRefs.current.push(el);
		}
	};

	//* APPLY SLIDE UP EFFECT TO INPUT PLACEHOLDER TEXT
	const animatePlaceholder = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				label.setAttribute('class', 'label label-animated');
			}
		}
	};

	//* APPLY SLIDE UP EFFECT TO INPUT PLACEHOLDER TEXT
	const removePlaceholderAnimation = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				label.setAttribute('class', 'label');
			}
		}
	};

	//* SET STATES OF INPUT VALUES
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
				const MAXLENGTH = 11;
				value = e.target.value;
				if (value.length > MAXLENGTH) value = value.slice(0, MAXLENGTH);
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
		if (validateEmail(user.email) && validatePhoneNumber(phone)) {
			setSubmitted(!isSubmitted);
		} else {
			displayStatusMsg(myRef.current.name, myRef.current.value);
		}
	};

	//* FOCUS
	const handleFocus = (e) => {
		myRef.current = e.target;
		setIsFocused(true);
		console.log(myRef.current);
	};

	//* BLUR
	const handleBlur = () => {
		setIsFocused(false);
		if (myRef.current.value) {
			displayStatusMsg(myRef.current.name, myRef.current.value);
		}
	};

	const displayStatusMsg = (inputName) => {
		if (inputName === 'phone') {
			setInputStatusMsg(
				phoneIsValid
					? 'VALID!'
					: 'PLEASE ENTER A VALID NUMBER INCLUDING AREA CODE'
			);
			setTimeout(() => {
				setInputStatusMsg('');
			}, 3000);
		}
		if (inputName === 'email') {
			setEmailStatusMsg(
				emailIsValid ? 'VALID!' : 'PLEASE ENTER A VALID EMAIL ADDRESS'
			);
			setTimeout(() => {
				setEmailStatusMsg('');
			}, 3000);
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
								ref={phoneRef}
								type='tel'
								name='phone'
								title='Please only enter numbers. No spaces, dashes or special characters'
								value={phone}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
							<div
								className={`input-status-message ${
									phoneIsValid ? 'valid' : 'error'
								}`}
							>
								{inputStatusMsg}
							</div>
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
							<div
								className={`input-status-message ${
									emailIsValid ? 'valid' : 'error'
								}`}
							>
								{emailStatusMsg}
							</div>
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

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './SignUpForm.scss';
import {
	validateEmail,
	validatePhoneNumber,
	formatPhoneNumber,
} from '../../utility/formValidation';

const initialPhoneState = '';

const initialUserState = {
	name: '',
	email: '',
	checkbox: false,
};

const SignUpForm = () => {
	const [user, setUser] = useState(initialUserState);
	const [phone, setPhone] = useState(initialPhoneState);
	const [isFocused, setIsFocused] = useState(false);
	const [inputStatusMsg, setInputStatusMsg] = useState('');
	const [emailStatusMsg, setEmailStatusMsg] = useState('');
	const [phoneIsValid, setPhoneIsValid] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const phoneRef = useRef(null);
	const inputRef = useRef('');
	const labelRefs = useRef([]);
	labelRefs.current = [];
	const checkRef = useRef(false);

	//* Access label elements for manipulation
	const getRefs = (el) => {
		if (el && !labelRefs.current.includes(el)) {
			labelRefs.current.push(el);
		}
	};

	//* Applies slide up effect to input label text
	const animateLabel = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				return label.setAttribute('class', 'label label-animated');
			}
		}
	};

	//* Removes slide up effect from input label text
	const removeLabelAnimation = (inputName) => {
		for (let i = 0; i < labelRefs.current.length; i++) {
			const labelName = labelRefs.current[i].dataset.name;
			const label = labelRefs.current[i];
			if (labelName === inputName) {
				return label.setAttribute('class', 'label');
			}
		}
	};

	const toggleCheckBox = (e) => {
		setUser({ ...user, checkbox: e.target.checked });
	};

	//* Sets state for input values
	const handleChange = (e) => {
		let value;
		if (e.target.type === 'email' || 'text') {
			value = e.target.value;
			setUser({ ...user, [e.target.name]: value });
		}
		if (e.target.type === 'tel') {
			const MAXLENGTH = 11;
			value = e.target.value;
			if (value.length > MAXLENGTH) value = value.slice(0, MAXLENGTH);
			setPhone(value);
		}
		return value;
	};

	//* Handles form submission & input status message based on validation checks
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateEmail(user.email) && validatePhoneNumber(phone)) {
			setSubmitted(!isSubmitted);
		} else {
			displayStatusMsg(inputRef.current.name, inputRef.current.value);
		}
	};

	//* Sets state of focus when user enters input field
	const handleFocus = (e) => {
		inputRef.current = e.target;
		setIsFocused(true);
	};

	//* Sets state of focus when user leaves input field
	const handleBlur = () => {
		setIsFocused(false);
		if (inputRef.current.value) {
			displayStatusMsg(inputRef.current.name, inputRef.current.value);
		}
	};

	//* Displays status of user input
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

	//* Validates phone number as user enters input
	useEffect(() => {
		setPhoneIsValid(validatePhoneNumber(phone));
	}, [phone]);

	//* Validates email address as user enters input
	useEffect(() => {
		setEmailIsValid(validateEmail(user.email));
	}, [user.email]);

	//* Adds & removes label animation dependent on input field focus
	useEffect(() => {
		if (isFocused) {
			animateLabel(inputRef.current.name);
		} else if (!isFocused && inputRef.current.value === '') {
			removeLabelAnimation(inputRef.current.name);
		}
	}, [isFocused, inputRef]);

	//* Removes dashes from phone number and sets state on input focus
	useEffect(() => {
		if (
			isFocused &&
			inputRef.current.name === 'phone' &&
			inputRef.current.value !== ''
		) {
			setPhone(inputRef.current.value.replace(/-/g, ''));
		}
	}, [isFocused, inputRef]);

	//* Adds dashes to phone number and sets state on input blur
	useEffect(() => {
		const formattedNumber = formatPhoneNumber(phone);
		if (phoneIsValid && !isFocused) {
			setPhone(formattedNumber);
		}
	}, [phone, phoneIsValid, isFocused]);

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
							ref={checkRef}
							type='checkbox'
							name='checkbox'
							// defaultChecked={user.checkbox}
							// checked={user.checkbox}
							// onChange={handleChange}
							// onFocus={handleFocus}
							onClick={toggleCheckBox}
						/>
						<label className='checkbox-label'>
							Subscribe to our newsletter
						</label>
						<button type='submit' className='signup-button'>
							SUBMIT
						</button>
					</form>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1631941383/buzztraq/buzztraq_mockup3.png'
						alt='buzztraq watch mockup'
						className='signup-img'
					/>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;

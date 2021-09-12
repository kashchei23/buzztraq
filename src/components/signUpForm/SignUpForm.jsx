import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './SignUpForm.scss';

const initialState = {
	name: '',
	phone: '',
	email: '',
	checkbox: false,
};
const SignUpForm = () => {
	const [user, setUser] = useState(initialState);
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
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setUser({ ...user, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Thanks', user.name);
		setSubmitted(!isSubmitted);
		console.log(isSubmitted);
	};

	const handleFocus = (e) => {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		if (inputValue === '') {
			setFocus(!isFocused);
		}
		applyStyles(inputName);
	};

	const handleBlur = (e) => {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		if (inputValue === '') {
			setFocus(!isFocused);
			removeStyles(inputName);
		}
	};

	// const resetForm = () => window.location.reload();

	return (
		<div>
			{isSubmitted ? (
				<>
					<div className='modal'>
						<h2>Thanks {user.name}!</h2>
						<p>Check your email for confirmation!</p>
						<Link to='/' className='modal-close'>
							Close window
						</Link>
					</div>
					<div className='modal-shadow' />
				</>
			) : (
				''
			)}
			<div className='signup'>
				<form
					className='signup-form'
					autoComplete='off'
					onSubmit={handleSubmit}
				>
					<h2>Sign up for a free trial</h2>
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
							type='text'
							name='phone'
							value={user.phone}
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
							type='text'
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
					<label className='checkbox-label'>Subscribe to our newsletter</label>
					<button type='submit' className='signup-button'>
						Submit
					</button>
				</form>
				<div className='signup-img' />
			</div>
		</div>
	);
};

export default SignUpForm;

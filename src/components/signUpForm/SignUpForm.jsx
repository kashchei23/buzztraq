import React, { useState } from 'react';

import './SignUpForm.scss';

const initialState = {
	name: '',
	phone: '',
	email: '',
	checkbox: false,
};
const SignUpForm = () => {
	const [user, setUser] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Thanks', user.name);
	};

	const handleChange = (e) => {
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setUser({ ...user, [e.target.name]: value });
		console.log(user);
	};

	return (
		<div>
			<div className='signup'>
				<div className='signup-wrapper'>
					<form className='signup-form' onSubmit={handleSubmit}>
						<h1>Sign up for a free trial</h1>
						<label>Enter your name </label>
						<input
							type='text'
							name='name'
							value={user.name}
							onChange={handleChange}
							required
						/>
						<label>Enter your phone number </label>
						<input
							type='text'
							name='phone'
							value={user.phone}
							onChange={handleChange}
							required
						/>
						<label>Enter your email </label>
						<input
							type='text'
							name='email'
							value={user.email}
							onChange={handleChange}
							required
						/>
						<input
							type='checkbox'
							name='checkbox'
							checked={user.checkbox}
							onChange={handleChange}
						/>
						<label>Subscribe to our newsletter</label>
						<button type='submit' className='signup-button'>
							Submit
						</button>
					</form>
					<div className='signup-img' />
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;

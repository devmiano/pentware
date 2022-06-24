import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import AuthContext from '../context/AuthContext';
import jwt_decode from 'jwt-decode';

const Signup = () => {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [conPassword, setConPassword] = React.useState('');
	const { setAuthTokens, setUser } = React.useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name);
		console.log(email);
		console.log(password);
		console.log(conPassword);
		if (password !== conPassword || password.length < 8) {
			Toastify({
				text: 'Password must match & have more than 8 chars',
				duration: 2000,

				// close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		} else {
			const options = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify({
					username: name,
					email: email,
					password: password,
				}),
			};
			let res = await fetch('/api/auth/register/', options);
			let data = await res.json();
			if (res.status === 200) {
				Toastify({
					text: 'Account created',
					duration: 2000,
					gravity: 'bottom', // `top` or `bottom`
					position: 'center', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'green',
					},
					onClick: function () {}, // Callback after click
				}).showToast();
				const options2 = {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify({ username: name, password: password }),
				};
				let res2 = await fetch('/api/token/', options2);
				let data2 = await res2.json();
				setAuthTokens(data2);
				setUser(jwt_decode(data2.access));
				localStorage.setItem('authTokens', JSON.stringify(data2));
				localStorage.setItem('user', JSON.stringify(jwt_decode(data2.access)));
				navigate('/shop/');
			} else {
				Toastify({
					text: 'Username and email is taken',
					duration: 2000,
					gravity: 'bottom', // `top` or `bottom`
					position: 'center', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'red',
					},
					onClick: function () {}, // Callback after click
				}).showToast();
			}
		}
	};

	return (
		<div className='h-full bg-smog-700 flex justify-center items-center w-full mt-12'>
			<form onSubmit={handleSubmit}>
				<div className='bg-smog-600 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm'>
					<div className='space-y-4'>
						<h1 className='text-center text-2xl font-semibold text-smog-200'>
							Register
						</h1>
						<div>
							<label
								htmlFor='name'
								className='block mb-1 text-smog-300 font-base'>
								Username
							</label>
							<input
								type='text'
								className='bg-smog-700 px-4 py-2 outline-none rounded-md w-full'
								id='name'
								value={name}
								name='name'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block mb-1 text-smog-300 font-base'>
								Email
							</label>
							<input
								type='email'
								className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
								id='email'
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor='password'
								className='block mb-1 text-smog-300 font-base'>
								Password
							</label>
							<input
								type='password'
								className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
								id='password'
								value={password}
								name='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor='conPassword'
								className='block mb-1 text-smog-300 font-base'>
								Password
							</label>
							<input
								type='password'
								className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
								id='conPassword'
								value={conPassword}
								name='conPassword'
								onChange={(e) => setConPassword(e.target.value)}
							/>
						</div>
					</div>
					<button className='mt-4 w-full bg-smog-400 text-smog-700 py-2 rounded-md font-medium text-lg tracking-wide'>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};
export default Signup;

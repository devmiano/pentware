import * as React from 'react';
import Toastify from 'toastify-js';
import jwt_decode from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
	const [name, setName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const { setAuthTokens, setUser } = React.useContext(AuthContext);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({ username: name, password: password }),
		};
		let res = await fetch('/api/token/', options);
		let data = await res.json();

		console.log(name);
		console.log(password);
		console.log(res);
		console.log(data);

		// setName(name);
		// setPassword(password);
		if (res.status === 200) {
			Toastify({
				text: 'Login successfull',
				duration: 3000,

				close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'green',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			localStorage.setItem('authTokens', JSON.stringify(data));
			localStorage.setItem('user', JSON.stringify(jwt_decode(data.access)));
			navigate('dashboard/');
		} else {
			Toastify({
				text: 'Incorrect credentials',
				duration: 3000,

				close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		}
	};

	return (
		<section className='section'>
			<form className='form' onSubmit={handleSubmit}>
				<h5>login</h5>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='form-row'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-input'
						id='password'
						value={password}
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					login
				</button>
				<p>
					Need Account? <Link to='signup/'>Register</Link>
				</p>
			</form>
		</section>
	);
};
export default Login;

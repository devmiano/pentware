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
			navigate('/shop/');
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
		<div className='h-full bg-smog-700 flex justify-center items-center w-full mt-24'>
			<form onSubmit={handleSubmit}>
				<div className='bg-smog-600 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm'>
					<div className='space-y-4'>
						<h1 className='text-center text-2xl font-semibold text-smog-200'>
							Login
						</h1>
						<div>
							<label for='name' className='block mb-1 text-smog-300 font-base'>
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
								for='password'
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
					</div>
					<button className='mt-4 w-full bg-smog-400 text-smog-700 py-2 rounded-md font-medium text-lg tracking-wide'>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
export default Login;

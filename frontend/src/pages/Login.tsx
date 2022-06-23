import * as React from 'react';
import AuthContext from '../context/AuthContext';

function Login() {
	let { loginUser } = React.useContext(AuthContext);

	return (
		<div className='text-lime-300'>
			<h1 className=''>Login</h1>
			<form className='' onSubmit={loginUser}>
				<label className=''>
					Email
					<input className='' type='email' name='email' />
				</label>
				<label className=''>
					Password
					<input className='' type='password' name='password' />
				</label>
				<input className='' type='submit' />
			</form>
		</div>
	);
}

export default Login;

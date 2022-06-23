import * as React from 'react';
import AuthContext from '../context/AuthContext';

function Signup() {
	let { signup } = React.useContext(AuthContext);
	return (
		<div className='text-lime-300'>
			<h1 className=''>Signup</h1>
			<form className='' onSubmit={signup}>
				<label className=''>
					First Name
					<input className='' type='text' name='first_name' />
				</label>
				<label className=''>
					Last Name
					<input className='' type='text' name='last_name' />
				</label>
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

export default Signup;

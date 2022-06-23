import * as React from 'react';
import { useState } from 'react';
import { Link } from 'wouter';
import AuthContext from '../context/AuthContext';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);
	let { user, logoutUser } = React.useContext(AuthContext);

	const authlinks = (
		<div className='flex items-center justify-center'>
			<Link to='/' className='link'>
				<p>{user?.email}</p>
			</Link>
			<button className='link' onClick={logoutUser}>
				Logout
			</button>
		</div>
	);
	const publiclinks = (
		<div className='flex items-center justify-center'>
			<Link to='/' className='link'>
				Login
			</Link>
			<Link to='/' className='link'>
				Signup
			</Link>
		</div>
	);
	return (
		<nav className='w-screen z-30 flex justify-between bg-lime-700 p-2'>
			<Link to='/' className='link flex items-center justify-center'>
				HOOD
			</Link>
			<div className='flex items-center justify-center'>
				<Link to='/' className='link'>
					Create
				</Link>
				<Link to='/' className='link'>
					Businesses
				</Link>
				<Link to='/' className='link'>
					Search
				</Link>
			</div>
			{user ? authlinks : publiclinks}
		</nav>
	);
}

export default Navbar;

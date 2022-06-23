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
			<Link to='/' className='brand'>
				{user?.email}
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
		<nav className='w-screen z-30 flex justify-between bg-smog-600 p-2'>
			<Link to='/' className='brand flex items-center justify-center'>
				PENTWARE
			</Link>
			<div className='flex items-center justify-center'>
				<Link to='/' className='link'>
					Shop
				</Link>
				<Link to='/categories/' className='link'>
					Categories
				</Link>
				<Link to='/' className='link'>
					Search
				</Link>
				<Link to='/' className='link'>
					Cart
				</Link>
			</div>
			{user ? authlinks : publiclinks}
		</nav>
	);
}

export default Navbar;

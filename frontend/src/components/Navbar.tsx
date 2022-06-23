import * as React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
	const { authTokens, user, logout } = React.useContext(AuthContext);

	return (
		<nav className='w-screen z-30 flex justify-between bg-smog-600 p-2'>
			<Link to='/' className='brand flex items-center justify-center'>
				PENTWARE
			</Link>
			<div className='flex items-center justify-center'>
				<Link to='shop/' className='link'>
					Shop
				</Link>
				<Link to='categories/' className='link'>
					Categories
				</Link>
				<Link to='/' className='link'>
					Search
				</Link>
				<Link to='cart/' className='link'>
					Cart
				</Link>
			</div>
			{authTokens ? (
				<div className='flex items-center justify-center'>
					<Link to='profile/' className='brand'>
						{user?.username}
					</Link>
					<button className='link' onClick={logout}>
						Logout
					</button>
				</div>
			) : (
				<div className='flex items-center justify-center'>
					<Link to='login/' className='link'>
						Login
					</Link>
					<Link to='signup/' className='link'>
						Signup
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;

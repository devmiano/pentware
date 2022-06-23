import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
  let checkNav = ({ isActive }) => (isActive ? 'link active' : 'link');
  const { authTokens, user, logout } = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <NavLink className={checkNav} to='/'>
        Home
      </NavLink>
      <NavLink className={checkNav} to='/about'>
        About
      </NavLink>
      <NavLink className={checkNav} to='/products'>
        Products
      </NavLink>
      <NavLink className={checkNav} to='/dashboard'>
        dashboard
      </NavLink>
      {authTokens ? (
        <span onClick={logout} className='link'>
          Logout
        </span>
      ) : (
        <>
          <NavLink className={checkNav} to='/login'>
            Login
          </NavLink>
        </>
      )}

      {}
    </nav>
  );
}

export default Navbar;

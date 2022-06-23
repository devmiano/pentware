import { createContext, useState, useEffect } from 'react';
import 'toastify-js/src/toastify.css';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	let [user, setUser] = useState(
		localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user'))
			: 'No user found'
	);
	let [authTokens, setAuthTokens] = useState(
		localStorage.getItem('authTokens')
			? JSON.parse(localStorage.getItem('authTokens'))
			: null
	);

	const logout = () => {
		localStorage.removeItem('authTokens');
		localStorage.removeItem('user');
		navigate('login/');
	};

	let contextData = {
		user: user,
		authTokens: authTokens,
		logout: logout,
		setAuthTokens: setAuthTokens,
		setUser: setUser,
	};

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};

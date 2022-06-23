import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useLocation } from 'wouter';
const AuthContext = React.createContext();
import axios from 'axios';
export default AuthContext;

export const AuthProvider = ({ children }) => {
	let [loading, setLoading] = React.useState(true);
	const [location, setLocation] = useLocation();
	let [user, setUser] = React.useState(() =>
		localStorage.getItem('authToken')
			? jwtDecode(localStorage.getItem('authToken'))
			: null
	);
	let [authToken, setAuthToken] = React.useState(() =>
		localStorage.getItem('authToken')
			? JSON.parse(localStorage.getItem('authToken'))
			: null
	);

	let signupUser = async (e) => {
		e.preventDefault();
		let response = await axios.send('/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_name: e.target.first_name.value,
				last_name: e.target.last_name.value,
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});

		let data = await response.json();

		if (response.status === 200) {
			setAuthToken(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem('authToken', JSON.stringify(data));
			setLocation('/');
		} else {
			alert('Something went wrong');
		}

		console.log(response);
	};

	let loginUser = async (e) => {
		e.preventDefault();
		let response = await fetch('/api/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});

		let data = await response.json();

		if (response.status === 200) {
			setAuthToken(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem('authToken', JSON.stringify(data));
			setLocation('/');
		} else {
			alert('Something went wrong');
		}
	};

	let updateToken = async () => {
		let response = await fetch('/api/token/refresh/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				refresh: authToken.refresh,
			}),
		});

		let data = await response.json();

		if (response.status === 200) {
			setAuthToken(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem('authToken', JSON.stringify(data));
			setLocation('/');
		} else {
			logoutUser;
		}
	};

	let logoutUser = () => {
		setAuthToken(null);
		setUser(null);
		localStorage.removeItem('authToken');
	};

	let contextData = {
		user: user,
		signupUser: signupUser,
		loginUser: loginUser,
		logoutUser: logoutUser,
	};

	React.useEffect(() => {
		let four = 100 * 60 * 4;
		let interval = setInterval(() => {
			if (authToken) {
				updateToken();
			}
		}, four);
		return () => clearInterval(interval);
	}, [authToken, loading]);

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};

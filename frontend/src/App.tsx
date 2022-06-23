import * as React from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Spinner from './components/Spinner';
import AuthContext, { AuthProvider } from './context/AuthContext';

const Category = React.lazy(() => import('./pages/Category'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

function App() {
	return (
		<React.Suspense fallback={<Spinner />}>
			<AuthProvider>
				<Switch>
					<Route path='/' component={Category} />
					<Route path='/categories' component={Category} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
				</Switch>
			</AuthProvider>
		</React.Suspense>
	);
}

export default App;

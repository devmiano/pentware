import * as React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './utils/SharedLayout';
import Products from './pages/Products';
import ProtectedRoute from './utils/ProtectedRoute';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Single from './pages/Single';

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='product/:slug' element={<Single />} />
						<Route path='/categories/' element={<Category />} />
						<Route path='/login/' element={<Login />} />
						<Route path='/signup/' element={<Signup />} />

						<Route
							path='/shop/'
							element={
								<ProtectedRoute>
									<Shop />
								</ProtectedRoute>
							}
						/>
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;

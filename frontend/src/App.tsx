import * as React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './utils/SharedLayout';
import Products from './pages/Products';
import ProtectedRoute from './utils/ProtectedRoute';
import Error from './pages/Error';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Spinner from './components/Spinner';
import One from './components/One';
import SingleProduct from './pages/SingleProduct';

function App() {
	return (
		<BrowserRouter>
			<React.Suspense fallback={<Spinner />}>
				<AuthProvider>
					<Routes>
						<Route path='/' element={<SharedLayout />}>
							<Route index element={<Home />} />
							<Route path='/products' element={<Products />} />
							<Route path='/categories/' element={<Category />} />
							<Route path='/shop/<:id>' element={<SingleProduct />} />
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
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;

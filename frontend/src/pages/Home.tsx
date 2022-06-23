import * as React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Products from './Products';
function Home() {
	const heading = Title({ title: 'Welcome to PentWare' });

	return (
		<div>
			<Navbar />
			{heading}
			<Products />
		</div>
	);
}

export default Home;

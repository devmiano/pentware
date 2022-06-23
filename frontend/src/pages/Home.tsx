import * as React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
function Home() {
	const heading = Title({ title: 'Welcome to PentWare' });

	return (
		<div>
			<Navbar />
			{heading}
		</div>
	);
}

export default Home;

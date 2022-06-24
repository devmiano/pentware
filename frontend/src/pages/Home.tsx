import * as React from 'react';
import Title from '../components/Title';
import Products from './Products';
function Home() {
	const heading = Title({ title: 'Welcome to PentWare' });

	return (
		<div className='p-8'>
			{heading}
			<Products />
		</div>
	);
}

export default Home;

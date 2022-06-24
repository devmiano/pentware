import * as React from 'react';
import Title from '../components/Title';
function Home() {
	const heading = Title({ title: 'Welcome to PentWare' });

	return <div className='p-8'>{heading}</div>;
}

export default Home;

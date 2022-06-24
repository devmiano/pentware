import * as React from 'react';

import AuthContext from '../context/AuthContext';
import AddProduct from './AddProduct';
import Buttons from './Buttons';
import Products from './Products';

const Shop = () => {
	const { user } = React.useContext(AuthContext);
	const [userData, setUserData] = React.useState('');
	React.useEffect(() => {
		getUser();
	}, []);

	async function getUser() {
		let res = await fetch(`/api/user/${user.user_id}/`);
		let data = await res.json();

		React.useEffect(() => {
			setUserData(JSON.stringify(data));
		});
	}
	return (
		<section className='section'>
			<h4>Dashboard</h4>
			<h5>User: {user.username}</h5>
			<div className='container px-5 py-12 mx-auto'>
				<Products />
			</div>

			<AddProduct onAdd={undefined} />
		</section>
	);
};
export default Shop;
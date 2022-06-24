import * as React from 'react';
import AuthContext from '../context/AuthContext';
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
			<div className='container px-5 py-12 mx-auto'>
				<Products />
			</div>
		</section>
	);
};
export default Shop;

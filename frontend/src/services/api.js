import axios from 'axios';

export default axios.create({
	baseURL: '/api/shop/products/',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

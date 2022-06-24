import { useState, useEffect } from 'react';
import api from '../services/api';

const AddProduct = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [productId, setProdcutId] = useState(null);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		refreshProducts();
	}, []);

	const refreshProducts = () => {
		api
			.get('/')
			.then((res) => {
				setProducts(res.data);
				// setName(res[0].name)
				// setGenre(res[0].genre)
				// setStarring(res[0].starring)
				// setMovieId(res[0].id)
			})
			.catch(console.error);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let item = { name, category, price };
		api.post('/', item).then(() => refreshProducts());
	};

	const onUpdate = (id) => {
		let item = { name };
		api.patch(`/${id}/`, item).then((res) => refreshProducts());
	};

	const onDelete = (id) => {
		api.delete(`/${id}/`).then((res) => refreshProducts());
	};

	function selectProduct(id) {
		let item = products.filter((product) => product.id === id)[0];
		setName(item.name);
		setCategory(item.category);
		setPrice(item.price);
		setProdcutId(item.id);
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-md-4'>
					<h3 className='float-left'>Create a new Movie</h3>
					<form onSubmit={onSubmit} className='mt-4'>
						<div className='mb-3'>
							<label>{productId}Name</label>
							<input
								type='text'
								placeholder='Enter Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='mb-3'>
							<label>Genre</label>
							<input
								type='text'
								placeholder='Enter Genre'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>

						<div className='mb-3'>
							<label>Starring</label>
							<input
								type='text'
								placeholder='Enter Starring'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</div>

						<div className='float-right'>
							<button
								variant='primary'
								type='submit'
								onClick={onSubmit}
								className='mx-2'>
								Save
							</button>
							<button
								variant='primary'
								type='button'
								onClick={() => onUpdate(productId)}
								className='mx-2'>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;

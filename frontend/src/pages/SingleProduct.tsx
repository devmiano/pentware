import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Single from '../components/Single';
import { useFetchProductsQuery } from '../services/product';

function SingleProduct() {
	const { id } = useParams();
	// console.log(id);
	const { data = [], isFetching } = useFetchProductsQuery();
	// console.log(products);
	const prod_id = data.find((prod) => {
		prod.id === id;
	});
	console.log(prod_id);

	return (
		<section className='section product'>
			<p>{id}</p>

			<Link to='/products'>Go back</Link>
		</section>
	);
}

export default SingleProduct;

import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Single from '../components/Single';
import { useFetchProductsQuery } from '../services/product';

function SingleProduct() {
	const options = (async) => ({
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			id: id,
			name: name,
			photo: photo,
			price: price,
			stock: stock,
			description: description,
			slug: slug,
			category: category,
		}),
	});

	let res = fetch(`/api/shop/${id}`, options);
	let data = res.json();
	console.log(data);

	return (
		<section className='section product'>
			<p>{data.id}</p>
			<img src={data.photo} alt='' />

			<Link to='/products'>Go back</Link>
		</section>
	);
}

export default SingleProduct;

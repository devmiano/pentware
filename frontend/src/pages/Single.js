import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Single() {
	const { slug } = useParams();
	const [singleProduct, setSingleProduct] = useState({});

	const get_details = async () => {
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
			},
		};
		let res = await fetch(`/api/shop/product/${slug}`, options);
		let data = await res.json();

		setSingleProduct(data);
	};

	useEffect(() => {
		get_details();
	}, []);

	return (
		<div>
			<h1>Product Page</h1>
			<h1>{singleProduct.name}</h1>
			<img
				src={`https://res.cloudinary.com/devmiano/${singleProduct.photo}`}
				alt=''
			/>
			<h1>{singleProduct.price}</h1>
			<h1>{singleProduct.stock}</h1>
		</div>
	);
}

export default Single;

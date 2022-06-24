import * as React from 'react';
import Card from '../components/Card';
import FilterBtn from '../components/FilterBtn';
import Title from '../components/Title';
import { useFetchProductsQuery } from '../services/product';

function Products() {
	const { data = [], isFetching } = useFetchProductsQuery();
	const heading = Title({ title: `${data.length} products` });

	return (
		<div>
			{heading}

			{data.map((product) =>
				Card({
					id: product.id,
					name: product.name,
					price: product.price,
					text: product.text,
					photo: product.photo,
					slug: product.slug,
					category: product.category,
				})
			)}
		</div>
	);
}

export default Products;

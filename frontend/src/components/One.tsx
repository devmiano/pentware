import * as React from 'react';
import { useFetchCategoriesQuery } from '../services/category';
import LongCard from '../components/LongCard';
import Title from '../components/Title';

function One() {
	const { data = [], isFetching } = useFetchCategoriesQuery();
	const heading = Title({ title: `${data.length} categories` });

	return (
		<div>
			{data
				.filter((categoryId) => categoryId.slug === categoryId.slug)
				.map((category) =>
					LongCard({
						id: category.id,
						title: category.name,
						subtitle: category.location,
						text: category.about,
						photo: category.photo,
						slug: category.slug,
					})
				)}
		</div>
	);
}

export default One;

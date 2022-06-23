import * as React from 'react';
import LongCard from '../components/LongCard';
import Title from '../components/Title';
import { useFetchCategoriesQuery } from '../services/category';

function Category() {
	const { data = [], isFetching } = useFetchCategoriesQuery();
	const heading = Title({ title: `${data.length} categories` });

	return (
		<div>
			{heading}
			{data.map((category) =>
				LongCard({
					id: category.id,
					title: category.name,
					subtitle: category.location,
					text: category.about,
					photo: category.photo,
					link: 'View',
				})
			)}
		</div>
	);
}

export default Category;

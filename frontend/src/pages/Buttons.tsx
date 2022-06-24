import * as React from 'react';
import FilterBtn from '../components/FilterBtn';
import { useFetchCategoriesQuery } from '../services/category';

function Buttons() {
	const { data = [], isFetching } = useFetchCategoriesQuery();
	return (
		<>
			{data.map((category) =>
				FilterBtn({
					id: category.id,
					title: category.name,
				})
			)}
		</>
	);
}

export default Buttons;

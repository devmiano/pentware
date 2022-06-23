import * as React from 'react';
import { Redirect } from 'wouter';
import LongCard from '../components/LongCard';
import Title from '../components/Title';
import AuthContext from '../context/AuthContext';
import { useFetchCategoriesQuery } from '../services/category';

// let { user } = React.useContext(AuthContext);
// 	{
// 		user ? <Redirect to={'/'} /> : <Redirect to={'/login'} />;
// }

function Category() {
	const { data = [], isFetching } = useFetchCategoriesQuery();
	const heading = Title({ title: `${data.length} categories` });

	return (
		<>
			{heading}
			{data.map((category) =>
				LongCard({
					id: category.id,
					title: category.title,
					subtitle: category.location,
					text: category.about,
					photo: category.photo,
					link: 'View',
				})
			)}
		</>
	);
}

export default Category;

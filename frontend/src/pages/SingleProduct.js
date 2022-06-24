import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Single from '../components/Single';
import { useFetchProductsQuery } from '../services/product';
import { useDispatch } from 'react-redux';

function SingleProduct(props) {
	const { data, isFetching } = useFetchProductsQuery();
	const dispatch = useDispatch();
	let params = useParams();

	dispatch(data(params.slug));

	return (
		<section className='section product'>
			<Link to='/products'>Go back</Link>
		</section>
	);
}

export default SingleProduct;

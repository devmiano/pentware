import * as React from 'react';
import { useParams } from 'react-router-dom';

class ProductDetail extends React.Component {
	async componentDidMount() {
		let { slug } = useParams();
		try {
			const res = await fetch('/api/shop/product/' + slug);
			const product = await res.json();
			this.setState({
				product,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className=''>
				<div className=''>
					<h1>{slug}</h1>
				</div>
			</div>
		);
	}
}

export default ProductDetail;

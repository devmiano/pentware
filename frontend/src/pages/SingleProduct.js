import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const prod = products.find((pr) => pr.id === id);

  // console.log(products);
  console.log(prod);
  return (
    <section className='section product'>
      <h2>single product</h2>
      <p>{id}</p>
      <img src={prod.image} alt='' />
      <h4>{prod.name ? prod.name : 'nothing found'}</h4>
      <Link to='/products'>Go back</Link>
    </section>
  );
};

export default SingleProduct;

import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className='products'>
          {products.map((prod) => {
            return (
              <article key={prod.id}>
                <h5>{prod.name}</h5>
                <Link to={`/product/${prod.id}`}>More info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;

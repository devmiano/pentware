import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h1>Error</h1>
      <h2>404 Page Not Found</h2>
      <Link to='/' className='btn'>
        Home
      </Link>
    </section>
  );
};
export default Error;

import React, { useState, useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Home = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    let res = await fetch('https://catfact.ninja/facts');
    let data = await res.json();
    console.log(data.data);
    setCat(data.data);
  }
  let allCats = cat.map((hussein) => {
    return <li key={hussein.length}>{hussein.fact}</li>;
  });
  return (
    <section className='section'>
      <h2>Home Page</h2>
      {/* <Link to='/about' className='btn'>
        About
      </Link> */}
      {allCats}
      <h1>George says hello</h1>
    </section>
  );
};
export default Home;

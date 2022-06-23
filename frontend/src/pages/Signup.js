import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import AuthContext from '../context/AuthContext';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const { setAuthTokens, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(conPassword);
    if (password !== conPassword || password.length < 8) {
      Toastify({
        text: 'Password must match & have more than 8 chars',
        duration: 2000,

        // close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      };
      let res = await fetch('http://127.0.0.1:8000/api/register/', options);
      let data = await res.json();
      if (res.status === 200) {
        Toastify({
          text: 'Account created',
          duration: 2000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'green',
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        const options2 = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ username: name, password: password }),
        };
        let res2 = await fetch('http://127.0.0.1:8000/api/token/', options2);
        let data2 = await res2.json();
        setAuthTokens(data2);
        setUser(jwt_decode(data2.access));
        localStorage.setItem('authTokens', JSON.stringify(data2));
        localStorage.setItem('user', JSON.stringify(jwt_decode(data2.access)));
        navigate('/dashboard');
      } else {
        Toastify({
          text: 'Username and email is taken',
          duration: 2000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'red',
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }
    }
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>Signup</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='ConPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-input'
            id='conPassword'
            value={conPassword}
            name='conPassword'
            onChange={(e) => setConPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Signup
        </button>
        <p>
          Have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </section>
  );
};
export default Login;

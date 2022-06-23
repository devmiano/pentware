import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState('');
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    let res = await fetch(`http://127.0.0.1:8000/api/user/${user.user_id}`);
    let data = await res.json();
    console.log(data);
    setUserData(JSON.stringify(data));
  }
  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h5>User: {user.username}</h5>
      <p>{userData}</p>
    </section>
  );
};
export default Dashboard;

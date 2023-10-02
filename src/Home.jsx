import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOutUser } from './firebase'; 

const Home = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate('/login');
    } catch (error) {
      console.log('Error in Sign Out', error.message);
    }
  };

  return (
    <div>
      <h1>Hello, Welcome</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;

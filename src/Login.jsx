import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import './App.css';
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword, signOutUser } from './firebase'; // Assuming you have a signOutUser function in your 'firebase' module

const Login = (props) => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  const [contact, setContact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log('error in LogIn', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser(); // Call your signOutUser function from 'firebase'
    } catch (error) {
      console.log('Error in Sign Out', error.message);
    }
  };

  return (
    <div className="header-div">
      <Input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        value={contact.email}
      />

      <br />

      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />

      <br />

      <button onClick={handleSubmit}>Log In</button>
      <button type="submit" className="login-button" onClick={logGoogleUser}>
        Login with Google
      </button>

      <button onClick={handleSignOut}>Sign Out</button>

      <br />
      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;

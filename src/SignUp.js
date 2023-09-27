import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import './App.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './firebase';


const SignUp = (props) => {
  const [contact, setContact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName,lastname, email, password, confirmPassword } = contact;

  console.log(contact);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, {displayName, lastname});
    } 
    catch (error) {
      console.log('error in creating user', error.message);
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>

    <Input
      name="displayName"
      type="text"
      placeholder="Name"
      onChange={handleChange}
      value={contact.displayName}
    />

<Input
      name="lastname"
      type="text"
      placeholder="Last Name"
      onChange={handleChange}
      value={contact.lastname}
    />

    <Input
      name="email"
      type="email"
      placeholder="Email"
      onChange={handleChange}
      value={contact.email}
    />

    <Input
      name="password"
      type="password"
      placeholder="Password"
      onChange={handleChange}
      value={contact.password}
    />

    <Input
      name="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      onChange={handleChange}
      value={contact.confirmPassword}
    />

      <br />
      <button onClick={handleSubmit}>Sign Up</button>
      <br />

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;


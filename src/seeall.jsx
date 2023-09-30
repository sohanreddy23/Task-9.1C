import React, { useState } from 'react';
import axios from 'axios';
import './seeall.css'

function Seeall() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    try {
      const serverAddress = 'http://localhost:3001';

      await axios.post(`${serverAddress}/api/subscribe`, { email });

      await axios.post(`${serverAddress}/api/sendWelcomeEmail`, { email });

      setEmail('');
      alert('Subscription successful.');
    } catch (error) {
      console.error('Error subscribing and sending welcome email:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="signup">
      <div className="center">
        <button className="seeall">See all customers</button>
      </div>
      <div className="input-group">
        <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="button" 
          className="btn btn-lg btn-primary"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Seeall;

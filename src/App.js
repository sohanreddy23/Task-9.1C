import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navmenu from './navmenu';
import Routee from './routing/routing'
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home'; 

function App() {
  return (
    <div className="header-div">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Routee />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;

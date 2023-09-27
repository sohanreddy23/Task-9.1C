import './App.css';
import Routee from './routing/routing'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navmenu from './navmenu'
import Login from './Login'
import SignUp from './SignUp'

function App() {
  return (
    <div className="header-div">
      <Navmenu />
      <Routes>
      <Route path="/" element={<Routee />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

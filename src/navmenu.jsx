import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

function Navmenu(){
  return(  
    <ul className="menu">
    <li><Link to="/">DevLink Marketplace</Link></li>
      <li><a href="#Find DEV">Find Dev</a></li>
      <li><a href="#Find jobs">Find Jobs</a></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
  </ul>
  )
}
export default Navmenu ;
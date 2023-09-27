import React from 'react'
import './seeall.css'

function Seeall(){
    return(
        <div className="signup">
        <div className="center">
          <button className="seeall">See all customers</button>
        </div>
        <div className="input-group">
          <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <button type="submit" className="btn btn-lg btn-primary">Subscribe</button>
        </div>
      </div>
    )
}
export default Seeall
import React from 'react'
import Customer from './customer'
import customers from './cusarray'
import './dev.css'

function deve (cus ){
    return (
    <Customer
   logo = {cus.logo}
   name = {cus.name}
   Description = {cus.Description}
  />
  )
    }
    const Customerslist = () =>
    {  
        return <div className="row">
        {customers.map((cus ) => 
          <Customer
          logo = {cus.logo}
          name = {cus.name}
          Description = {cus.Description}
          rating={cus.rating}
      />
    )}
         
        </div>
    }
    
    export default Customerslist

import React from 'react'
import Developer from './developer'
import developers from './devarray'
import './dev.css'

function deve (dev ){
    return (
    <Developer
   image = {dev.image}
   name = {dev.name}
   Description = {dev.Description}
  />
  )
    }
    const Developerslist = () =>
    {  
        return <div className="row">
        {developers.map(  (dev ) => 
          <Developer
          image = {dev.image}
          name = {dev.name}
          Description = {dev.Description}
          rating = {dev.rating}
      />
    )}
         
        </div>
    }
    
    export default Developerslist






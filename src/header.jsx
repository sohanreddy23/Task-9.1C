import React from 'react'
import {faker} from '@faker-js/faker'
import './header.css'

function Header(){
    return(
        <div>
            <img src={faker.image.imageUrl()} alt="Photo" style={{width:'1430px',height:'600px'}}
            />
            <h1 className="header-container">Featured FreeLancers</h1>
        </div>
       
    )
}
export default Header
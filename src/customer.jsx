import React from 'react'

function Customer(props){
    return(
        <div>
            <img src={props.logo} alt="Photo" style={{width:'200px',height:'200px'}} />
            <h2>{props.name}</h2>
            <p>{props.Description}</p>
            <div>
            <span role="img" aria-label="Star">⭐️</span>
            <span>{props.rating}</span>
            </div>
        </div>

    )
}
export default Customer ;
import React from 'react'

function Developer(props){
    return(
        <div>
            <img src={props.image} alt="Photo" style={{width:'200px',height:'200px'}} />
            <h2>{props.name}</h2>
            <p>{props.Description}</p>
            <span role="img" aria-label="Star">⭐️</span>
            <span>{props.rating}</span>
        </div>

    )
}
export default Developer ;
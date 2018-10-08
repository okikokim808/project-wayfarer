import React from 'react';
import './App.css'


const cityArray = (props) => {
    return(
        <div>
            <p>* * * * *</p>
            <img src={props.city.images} alt={props.city.name}/>
            <h2>{props.city.name}</h2>
            <p>{props.city.summary}</p>
        </div>
    )
}

export default cityArray
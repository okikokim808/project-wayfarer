import React, {Component} from 'react';
import './App.css'


const cityArray = (props) => {
    return(
        <div className="container">
            <h2>{props.city.name}</h2>
            <img 
                src={props.city.images} 
                alt={props.city.name}/>
            <p>{props.city.summary}</p>
        </div>
    )
}

export default cityArray
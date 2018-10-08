import React, {Component} from 'react';
import './App.css'


const cityArray = (props) => {
    return(
        <div className="container">
            <h2>{props.city.name}</h2>
            <img 
                src={props.city.images} 
                alt={props.city.name}/>
            <h4>{props.city.summary}</h4>
        </div>
    )
}

export default cityArray
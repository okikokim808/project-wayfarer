import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import City from './City'
import './App.css'


const cityArray = (props) => {
    return(
        <div>
            <p>* * * * *</p>
            <img className="cityImage" src={props.city.image} alt={props.city.name}/>
            <h2><a href={<City />}>{props.city.name}</a></h2>
            <p>{props.city.summary}</p>
        </div>
    )
}

export default cityArray
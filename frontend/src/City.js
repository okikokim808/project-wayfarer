import React, {Component} from 'react';
import cityArray from './Cities'
import './App.css'

class City extends Component {
    render() {
        return (
            <div>
            <p>hi</p>
            {/* <img src={props.city.images} alt={props.city.name}/>
            <h2><a href="#">{props.city.name}</a></h2>
            <p>{props.city.summary}</p> */}
            </div>
        )
    }
    
}

export default City
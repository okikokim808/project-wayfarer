import React, {Component} from 'react';
import './App.css'

class City extends Component {
    render() {
        return (
            <div>
            <p>hi</p>
            <img src={this.props.city.images} alt={this.props.city.name}/>
            <h2>{this.props.city.name}</h2>
            <p>{this.props.city.summary}</p>
            </div>
        )
    }
    
}

export default City
import React, { Component } from 'react';
import './App.css'
import hetchy from './images/hetchy.jpg'

class Splashnav extends Component {
    render() {
        return (
            <header class='splashHeader'>
                <div class='imageAndLogo'>
                <img class='navLogo' src= {hetchy} />
                <h2 class='splashTitle'>Wayfarer</h2>
                </div>
                <nav>
                    <ul class='splashNav'>
                        <li><a class='navLink' href='#'>Sign In</a></li>
                        <li><a class='navLink' href='#'>Sign Up</a></li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}


export default Splashnav;
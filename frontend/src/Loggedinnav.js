import React, {Component} from 'react'
import './App.css'
import hetchy from './images/hetchy.jpg'

class Loggedinnav extends Component {
    render() {
        return (
            <header class='splashHeader'>
                <div class='imageAndLogo'>
                    <img class='navLogo' src= {hetchy} />
                    <h2 class='splashTitle'>Wayfarer</h2>
                </div>
                <form class='searchbar'>
                    <input type={Text} placeholder='Search' />
                </form>
            
        </header>
        )
    }
}

export default Loggedinnav;
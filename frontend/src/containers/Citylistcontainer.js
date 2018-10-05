import React, {Component} from 'react'
import cityArray from '../seed'

class Citylistcontainer extends Component {
    constructor() {
        super()
        this.state = {
            cities: cityArray
        }
    }
    render() {
        return(
            <div className="cityList">
                <h1>City List container</h1>
            </div>
        )
    }


}

export default Citylistcontainer;
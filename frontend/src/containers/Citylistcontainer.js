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
        console.log(this.state.cities)
        return(
            <div>
                <h1>hellooo</h1>
            </div>
        )
    }


}

export default Citylistcontainer;
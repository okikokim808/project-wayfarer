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
<<<<<<< HEAD
            <div>
                <h1>{this.state.cities.name}</h1>
=======
            <div className="cityList">
                <h1>City List container</h1>
>>>>>>> 47904632921870e902e8d8e4537880296b4081e9
            </div>
        )
    }


}

export default Citylistcontainer;
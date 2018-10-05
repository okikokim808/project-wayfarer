import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
import Splashnav from './Splashnav'
// import Loggedinnav from './Loggedinnav'
import Citylistcontainer from './containers/Citylistcontainer'
import './App.css';
import axios from 'axios'

import './App.css'
class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }
  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSignUp (e) {
    e.preventDefault()
      axios.post('http://localhost:3001/users/signup', {
          email: this.state.email,
          password: this.state.password
        })
          .then(response => {
              localStorage.token = response.data.token
              this.setState({
                  isLoggedIn: true
              })
          })
          .catch(err => console.log(err))
  }

  handleSignIn (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
            localStorage.token = response.data.token
            this.setState({
              isLoggedIn: true
            })
        })
        .catch(err => console.log(err))
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <Splashnav 
        isSignedIn = {this.state.isLoggedIn} 
        handleSignIn = {this.handleSignIn} 
        handleSignUp={this.handleSignUp} 
        handleInput={this.handleInput}
        handleLogOut={this.handleLogOut} />
        <Carousel />
        <About />
        <Citylistcontainer />
      </div>
    );
  }
}

export default App;

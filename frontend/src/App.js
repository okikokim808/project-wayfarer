import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SplashPage from './containers/SplashPage'
import Splashnav from './Splashnav'
// import Loggedinnav from './Loggedinnav'
import Citylistcontainer from './containers/Citylistcontainer'
import Postmodal from './Postmodal'
import './App.css';
import axios from 'axios'
import Profile from './Profile'
import './App.css'
import About from './About';
class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
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
        isLoggedIn: true,
        redirect : <Redirect to="/Profile"></Redirect>
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
          username: this.state.username,
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
        username: this.state.username,
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

  handleLogOut(e) {
    this.setState({
      [e.target.name]: '',
      username: '',
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
        handleLogOut={this.handleLogOut}
        handleRedirect = {this.state.redirect} />
        {this.state.redirect}
        <Switch>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Cities' component={ Citylistcontainer }/>
          {/* <Route exact path='/' component={ Postmodal }/>  */}
          <Route exact path='/' component={ SplashPage }/>
       </Switch>
      </div>
    );
  }
}

export default App;
import React, {Component} from 'react';
import './App.css'
import hetchy from './images/hetchy.jpg'

class Profile extends Component {
    render() {
        return (
            <div>
            <div className='profile'>
                <img className='userProfileImage' src={hetchy} />
                <div className='userInfo'>
                <h2>Username:</h2>
                <h2>here:{this.props.match.params.username}</h2>
                <h3>Current City:</h3>
                <h4>Joined: </h4>
                </div>
            </div>
            <div className="userPosts">
            <h2>Posts: </h2>
            </div>
            </div>
        )
    }
}


export default Profile;
import React, {Component} from 'react';
import './App.css'
import hetchy from './images/hetchy.jpg'

class Profile extends Component {
    render() {
        return (
            <div>
            <div class='profile'>
                <img class='userProfileImage' src={hetchy} />
                <div class='userInfo'>
                <h2>Username:</h2>
                <h3>Current City:</h3>
                <h4>Joined: </h4>
                </div>
            </div>
            <div class="userPosts">
            <h2>Posts: </h2>
            </div>
            </div>
        )
    }
}


export default Profile;
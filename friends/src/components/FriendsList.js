import React from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";
import axios from 'axios';

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: [],
        newFriend: {
            name: '',
            age: '',
            email: '',  
        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log(res)
                this.setState({
                    friendsList: res.data
                })
            })
            .catch(err => {
                console.log(err.message
            )});
    }

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', {
                id: new Date(),
                name: this.state.newFriend.name,
                age: this.state.newFriend.age,
                email: this.state.newFriend.email
            })
            .then(res => {
                console.log(res)
                this.setState({
                    friendsList: res.data
                })
            })
            .catch(err => {
                console.log(err.message
            )});
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
              }
        })
    }

    render() {
        const friends = this.state.friendsList;
        return (
            <div>
                <div className='friendsForm'>
                    <form onSubmit={this.addFriend}>
                        <label>Name:
                        <input
                            type = 'text'
                            name = 'name'
                            value = {this.state.newFriend.name}
                            onChange={this.handleChange}
                        />
                        </label>
                        <br />
                        <label>Age:
                        <input
                            type = 'text'
                            name = 'age'
                            value = {this.state.newFriend.age}
                            onChange={this.handleChange}
                        />
                        </label>
                        <br />
                        <label>Email:
                        <input
                            type = 'text'
                            name = 'email'
                            value = {this.state.newFriend.email}
                            onChange={this.handleChange}
                        />
                        </label>
                        <br />
                        <button>Add friend</button>
                    </form>
                    <br />
                </div>
                <br />
                <br />
                <div className="friendsList">
                    {
                        friends.map(friend => (
                            <div key={friend.id} className="friend">
                                <h4>{friend.name}</h4>
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default FriendsList;
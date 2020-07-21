import React from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }

    componentDidMount() {
        this.getFriends();
      }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/data')
            .then(res => {
                this.setState({
                    friendsList: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const friends = this.state.friendsList;
        console.log(friends)
        return (
            <div>
                {
                    friends.map(friend => (
                        <div key={friend.id} className="friend">
                            <p>{friend.name}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default FriendsList;
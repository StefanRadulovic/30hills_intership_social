import React, { Component, Fragment } from 'react';

import './Friends.css';
import female from '../../images/female-placeholder.png';
import male from '../../images/placeholder-profile-male.jpg';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.id,
            showFriends: [],
            directFriends: [],
            friendsOfFriends: [],
            suggestedFriends: [],
            displayFriends: true,
            displayFriendsOfFriends: false,
            displaySuggestedFriends: false
        }
    }

    displayFriendsHandler = () => {
        const id = this.state.userId;   // eslint-disable-next-line
        const user = this.props.users.filter(el => { // eslint-disable-next-line
            if (el.id == id) {
                return true
            }
        })
        const friends = user[0].friends;
        let usersFriends = [];
        friends.map(fr => {
            if (this.props.users[0]) {
                for (let i = 0; i < this.props.users.length; i++) {
                    if (fr == this.props.users[i].id) {
                        const friend = this.props.users[i];
                        usersFriends.push(friend)
                    }
                }
            }

        });
        this.setState({
            directFriends: friends,
            showFriends: usersFriends,
            displayFriends: true,
            displayFriendsOfFriends: false,
            displaySuggestedFriends: false
        })
    };

    displayFriendsOfFriendsHandler = () => {
        let arrayOfFriendsNum = [];
        let arrayOfFriends = [];
        let arrayFriendsOfFriends=[];
        for (let i = 0; i < this.state.showFriends.length; i++) {
            arrayOfFriendsNum = arrayOfFriendsNum.concat(this.state.showFriends[i].friends)
        }
        arrayOfFriends = arrayOfFriendsNum.filter((value, index, arr) => arr.indexOf(value) === index) // checks, if the given value is the first occurring. If not, it must be a duplicate and will not be copied.

        for(let i=0;i<arrayOfFriends.length;i++){       // create new array without direct friends
            if(!this.state.directFriends.includes(arrayOfFriends[i])){
                arrayFriendsOfFriends.push(arrayOfFriends[i])
            }
        }


        let usersFriends = []; /// this shoud be a one separate function
        arrayFriendsOfFriends.map(fr => {
            if (this.props.users[0]) {
                for (let i = 0; i < this.props.users.length; i++) {
                    if (fr == this.props.users[i].id && fr != this.state.userId) {
                        const friend = this.props.users[i];
                        usersFriends.push(friend)
                    }
                }
            }

        });
        this.setState({
            showFriends: usersFriends,
            displayFriends: false,
            displayFriendsOfFriends: true,
            displaySuggestedFriends: false
        })
    };

    displaySuggestedFriendsHandler = () => {
        let arrayOfFriendsNum = [];
        let arrayOfFriends = [];
        let arraySuggestedFriends=[];
        for (let i = 0; i < this.state.showFriends.length; i++) {
            arrayOfFriendsNum = arrayOfFriendsNum.concat(this.state.showFriends[i].friends)
        }
        arrayOfFriends = arrayOfFriendsNum.filter((value, index, arr) => arr.indexOf(value) !== index);
        arrayOfFriends = arrayOfFriends.filter((value, index, arr) => arr.indexOf(value) === index);

        for(let i=0;i<arrayOfFriends.length;i++){       // create new array without direct friends
            if(!this.state.directFriends.includes(arrayOfFriends[i])){
                arraySuggestedFriends.push(arrayOfFriends[i])
            }
        }

        let usersFriends = []; /// this shoud be a one separate function
        arraySuggestedFriends.map(fr => {
            if (this.props.users[0]) {
                for (let i = 0; i < this.props.users.length; i++) {
                    if (fr == this.props.users[i].id && fr != this.state.userId) {
                        const friend = this.props.users[i];
                        usersFriends.push(friend)
                    }
                }
            }

        });
        this.setState({
            showFriends: usersFriends,
            displayFriends: false,
            displayFriendsOfFriends: false,
            displaySuggestedFriends: true
        })
    };

    componentDidMount() {
        this.displayFriendsHandler();
    }

    render() {

        return (
            <Fragment>
                <div className='container-fluid'>
                    <div className='row friends-nav'>
                        <p className={`col-3`} id={`${this.state.displayFriends ? 'selected' : ''}`} onClick={this.displayFriendsHandler}>Friends</p>
                        <p className={`col-6`} id={`${this.state.displayFriendsOfFriends ? 'selected' : ''}`} onClick={this.displayFriendsOfFriendsHandler}>Friends of friends</p>
                        <p className={`col-3`} id={`${this.state.displaySuggestedFriends ? 'selected' : ''}`} onClick={this.displaySuggestedFriendsHandler}>Suggested friends</p>
                    </div>
                </div>
                <div className='container'>
                    {this.state.showFriends.map(el => {
                        var img = male;
                        if (el.gender === 'female') {
                            img = female;
                        }
                        return (
                            <div className="card col-3 user" key={el.id}>
                                <img className="card-img-top" src={img} alt="placeholder" />
                                <div className="card-body">
                                    <p className="card-text">{`Name: ${el.firstName} ${el.surname}`}</p>
                                    <p className="card-text">{`Age: ${el.age}`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </Fragment>
        )
    }

}

export default Friends;

import React, { Component } from 'react';
import './Main.css';

import data from '../Data/data';
import DisplayUsers from './DisplayUsers/DisplayUsers';
import Friends from '../Main/Friends/Friends'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDisplay: true,
            userId: null
        }
    }

    friendsDisplayHandler = (event) => {
        const id = event.target.id;
        this.setState({
            userDisplay: false,
            userId: id
        })
    }
    render() {
        return (
            <div className='main'>
                {this.state.userDisplay ? <DisplayUsers users={data} clicked={this.friendsDisplayHandler} /> : <Friends users={data} id={this.state.userId} />}

            <div className='container'>
            <p className='btn'>Show all users</p>
            </div>
            </div>
        )
    }
}

export default Main
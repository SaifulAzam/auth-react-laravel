import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserList from './UserList';
import Loading from '../Loading';
import FlashMessageList from '../flash/FlashMessagesList.js';

export default class User extends Component{
    constructor(){
        super();
        this.state = {
            events: [],
            loading: true
        }
    }
    componentWillMount()
    {
        this.setState({events: ['hello']});
        axios.get('/api/users')
            .then(response => {
               this.setState({events: response.data, loading: false});
            }); 

    }
    render(){
        const { events, loading } = this.state;

        return (
            <div className="home-container">
                <h1>users</h1>
                   

                {loading ? 
                    <Loading></Loading> :
                    <UserList user={events}></UserList>
                }
            </div>
        )
    }
}

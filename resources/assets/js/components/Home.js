import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FlashMessageList from './flash/FlashMessagesList.js';
export default class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <h1>Home</h1>

                 <FlashMessageList />
            </div>
        )
    }
}

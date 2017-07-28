import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FlashMessageList from './flash/FlashMessagesList.js';
import {withRouter} from "react-router-dom";

class Home extends Component{

    render(){
        return (
            <div className="home-container">
                <h1>Home</h1>
                 <FlashMessageList />
            </div>
        )
    }
}
export default withRouter(Home);
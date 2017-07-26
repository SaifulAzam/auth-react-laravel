import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserListItem from './UserListItem';

function UserList(props) {

    if(props.user.length == 0 ){
        return <div>No Users</div>
    }
    return <div>
                <ul>
                    {props.user.map(function(user, index){
                        return (
                                <UserListItem key={index} user={user}></UserListItem>
                            ) 
                        })}  
                    </ul>
            </div>
}

export default UserList;
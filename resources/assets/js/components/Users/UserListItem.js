import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function UserListItem(props) {
  return <div>
            <div><strong>Username:</strong>  {props.user.username}</div>
            <Link to={`/users/${props.user.id}/profile`} className="btn btn-primary btn-sm">
                <i className="" /> Profile
            </Link>
        </div>
}


export default UserListItem;
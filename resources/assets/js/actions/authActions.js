import axios from 'axios';
import setAuthToken from '../shared/utils/setAuthToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data){
    return (dispatch) => {
        return axios.post('api/login', data).then( response => {
            const token = response.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            // console.log(jwt.decode(token));

            axios.get('api/decode').then((data) => {
                dispatch(setCurrentUser(data.data));
            });

            
        });
    };
};
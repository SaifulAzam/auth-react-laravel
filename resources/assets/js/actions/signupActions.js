import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('api/register', userData).then((response) => {return response})
            .catch((error) => {
                return error.response.data;
            });
    }
}

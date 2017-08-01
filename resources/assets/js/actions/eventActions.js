import axios from 'axios';

export function createEvent(event){
    return dispatch => {
        return axios.post('api/new-event', event).then( response => console.log(response));
    }
}

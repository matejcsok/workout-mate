import { POST_LOGIN } from "../constants";
import axios from 'axios'

export const postLogin = (email, password) => dispatch => {
    axios.post('/api/userLogin', {
        email,
        password
    }).then(response => dispatch({
        type: POST_LOGIN,
        user: response
    }))
};
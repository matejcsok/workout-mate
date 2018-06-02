import { POST_LOGIN, LOG_OUT } from "../constants";
import axios from 'axios'

export const postLogin = (email, password) => dispatch => {
    axios.post('/api/userLogin', {
        email,
        password
    }).then(response => dispatch({
        type: POST_LOGIN,
        user: response
    })).then(res => console.log(res.user))
};

export const logOutAction = () => ({
    type: LOG_OUT
});
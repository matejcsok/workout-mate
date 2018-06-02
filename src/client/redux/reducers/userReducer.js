import { POST_LOGIN, LOG_OUT } from "../constants";


export const auth = (state = false, action) => {
    switch(action.type) {
        case POST_LOGIN:
            return action.user.data.auth;
        case LOG_OUT:
            console.log('in reducer');
            return false;
        default:
            return state;
    }
};

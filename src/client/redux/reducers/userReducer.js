import { POST_LOGIN } from "../constants";

const initialState = {
    email: '',
    password: '',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case POST_LOGIN:
            return {
                email: action.email,
                password: action.password
            };
        default:
            return state;
    }
}
import { SIGN_IN, SIGN_OUT } from "../actions/types"

const INITIAL_STATE = 
{
    isSignedIn: null,
    userId: null
}

const authReducer = (prevState = INITIAL_STATE, action) =>
{
    switch (action.type) {
        case SIGN_IN:
            return {...prevState, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...prevState, isSignedIn: false, userId: null};
        default:
            return prevState;
    }
}

export default authReducer;
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './ActionTypes'

const intialState = {
    loading: false,
    users: [],
    error: ""
}

const usersReducer = (state = intialState, Action) => {
    switch (Action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: Action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: Action.payload
            }

        default: return state
    }
}

export default usersReducer
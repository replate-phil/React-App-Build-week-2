import { LOGIN, FETCH_REPLATE_START, FETCH_REPLATE_SUCCESS, FETCH_REPLATE_FAILURE } from '../actions';

const initialState = {
    fetchingData: false,
    replate: [],
    isLoggingIn: false,
    err: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case FETCH_REPLATE_START:
            return {
                ...state,
                err: '',
                fetchingData: true
            };
        case FETCH_REPLATE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                err: '',
                fetchingData: false,
                replate: action.payload
            };
        case FETCH_REPLATE_FAILURE:
            return {
                ...state,
                err: action.payload
            };
        default:
            return state;
    }    
};

export default reducer;
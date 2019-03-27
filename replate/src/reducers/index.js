import { LOGIN, FETCH_REPLATE_START, FETCH_REPLATE_SUCCESS, FETCH_REPLATE_FAILURE, UPDATE, DELETE } from '../actions';

const initialState = {
    replates: [],
    fetchingData: false,
    updatingData: false,
    deletingData: false,
    isLoggingIn: false,
    err: ''
};

const rootReducer = (state = initialState, action) => {
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
                replates: action.payload
            };
        case FETCH_REPLATE_FAILURE:
            return {
                ...state,
                err: action.payload,
                fetchingData: false
            };
        case UPDATE:
            return {
                ...state,
                err: '',
                fetchingData: false,
                updatingData: true,
                replates: [...state.replate]
            }; 
        case DELETE:
            return {
                ...state,
                err: '',
                fetchingData: false,
                deletingData: true,
                replates: [...state.replate]
            };       
        default:
            return state;
    }    
};

export default rootReducer;
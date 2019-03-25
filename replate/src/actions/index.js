import axios from 'axios';

export const LOGIN = 'LOGIN';
export const FETCH_REPLATE_START = 'FETCH_REPLATE_START';
export const FETCH_REPLATE_SUCCESS = 'FETCH_REPLATE_SUCCESS';
export const FETCH_REPLATE_FAILURE = 'FETCH_REPLATE_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN });
    return axios
    .post(`http://localhisot:5000/api/auth`, creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
    });
};

export const getData = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getBusiness = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/api/business/?id=(id)`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getVolunteer = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/api/volunteer/?id=(id)`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getDonation = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/api/donation/?id=(id)`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getFoodbank = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/api/foodbank/?id=(id)`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getVol = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`http://localhost:5000/api/business`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};
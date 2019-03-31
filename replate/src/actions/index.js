import axios from 'axios';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const FETCH_REPLATE_START = 'FETCH_REPLATE_START';
export const FETCH_REPLATE_SUCCESS = 'FETCH_REPLATE_SUCCESS';
export const FETCH_REP_SUCCESS = 'FETCH_REP_SUCCESS';
export const FETCH_REPL_SUCCESS = 'FETCH_REPL_SUCCESS';
export const FETCH_REPLATE_FAILURE = 'FETCH_REPLATE_FAILURE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

const URL = `https://replate-phil.herokuapp.com`;

const id = `?id=(id)`;

export const register = creds => dispatch => {
    dispatch({ type: REGISTER });
    return axios
        .post(`https://replate-phil.herokuapp.com/api/auth/register`, creds)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    };

export const login = info => dispatch => {
    dispatch({ type: LOGIN });
    return axios
    .post(`https://replate-phil.herokuapp.com/api/auth/login`, info)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
    });
};

export const getData = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_REPLATE_FAILURE, payload: err.res });
        }); 
};

export const postData = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getBusiness = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/business`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postBusiness = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/business/${id}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateBusiness = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/business/${id}`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));    
};

export const deleteBusiness = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/business/${id}`)
        .then(res =>
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));    
};

export const getVolunteer = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/volunteers`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postVolunteer = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/volunteers`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateVolunteer = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/volunteers/${id}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteVolunteer = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/volunteers/${id}/:id`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getDonation = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/donations`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REP_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postDonation = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/donations`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateDonation = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/donations/${id}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteDonation = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/donations/${id}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getFoodbank = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/foodbank`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPL_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postFoodbank = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/foodbank`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateFoodbank = (replate) => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/foodbank/${id}/`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteFoodbank = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/foodbank/${id}/`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};
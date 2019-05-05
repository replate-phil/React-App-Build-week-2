import axios from 'axios';

// REGISTER
export const REGISTER = 'REGISTER';
// LOGIN
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// BUSINESS
export const FETCH_REPLATE_START = 'FETCH_REPLATE_START';
export const FETCH_REPLATE_SUCCESS = 'FETCH_REPLATE_SUCCESS';
export const FETCH_REPLATE_FAILURE = 'FETCH_REPLATE_FAILURE';
//VOLUNTEERS
export const FETCH_REP_START = 'FETCH_REP_START';
export const FETCH_REP_SUCCESS = 'FETCH_REP_SUCCESS';
export const FETCH_REP_FAILURE = 'FETCH_REP_FAILURE';
// DONATIONS
export const FETCH_REPL_START = 'FETCH_REPL_START';
export const FETCH_REPL_SUCCESS = 'FETCH_REPL_SUCCESS';
export const FETCH_REPL_FAILURE = 'FETCH_REPL_FAILURE';
// FOODBANK
export const FETCH_REPLA_START = 'FETCH_REPLA_START';
export const FETCH_REPLA_SUCCESS = 'FETCH_REPLA_SUCCESS';
export const FETCH_REPLA_FAILURE = 'FETCH_REPLA_FAILURE';
// UPDATE
export const UPDATE = 'UPDATE';
// DELETE
export const DELETE = 'DELETE';

const URL = `https://replate-app.herokuapp.com`;

const id = `:id`;

export const register = creds => dispatch => {
    dispatch({ type: REGISTER });
    axios
        .post(`${URL}/api/register`, creds)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};

export const login = info => dispatch => {
    dispatch({ type: LOGIN });
    axios
        .post(`${URL}/api/login`, info)
        .then(res => {
            localStorage.setItem('token', res.data.token);//sends token to local storage as text not undefined
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.res });
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
        .post(`${URL}/`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_REPLATE_FAILURE, payload: err });
        });
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
        .post(`${URL}/api/business`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateBusiness = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/business/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));    
};

export const deleteBusiness = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/business/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
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
        .post(`${URL}/api/volunteers`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateVolunteer = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/volunteers/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteVolunteer = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/volunteers/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
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
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postDonation = (donations) => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/donations`, donations, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateDonation = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/donations/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteDonation = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/donations/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
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
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postFoodbank = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/foodbank`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateFoodbank = () => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/foodbank/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteFoodbank = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/foodbank/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};
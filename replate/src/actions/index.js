import axios from 'axios';

export const LOGIN = 'LOGIN';
export const FETCH_REPLATE_START = 'FETCH_REPLATE_START';
export const FETCH_REPLATE_SUCCESS = 'FETCH_REPLATE_SUCCESS';
export const FETCH_REPLATE_FAILURE = 'FETCH_REPLATE_FAILURE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

const URL = `https://replate-phil.herokuapp.com`;

const id = `?id=(id)`;

export const login = creds => dispatch => {
    dispatch({ type: LOGIN });
    return axios
    .post(`${URL}/api/auth`, creds)
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
            if (err.res.status === 403) {
                localStorage.removeItem('token');
            }
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
        .get(`${URL}/api/business`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postBusiness = (replate) => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/business`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateBusiness = (replate) => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/business/${id}`, replate)
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
        .get(`${URL}/api/volunteers`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postVolunteer = (replate) => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/volunteers`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateVolunteer = (replate) => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/volunteers/${id}`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteVolunteer = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/volunteers/${id}`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getDonation = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/donations`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postDonation = (replate) => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/donations`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateDonation = (replate) => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/donations/${id}`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteDonation = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/donations/${id}`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const getFoodbank = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/api/foodbank`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postFoodbank = (replate) => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/api/foodbank`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const updateFoodbank = (replate) => dispatch => {
    dispatch({ type: UPDATE });
    axios
        .put(`${URL}/api/foodbank/${id}`, replate)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const deleteFoodbank = (id) => dispatch => {
    dispatch({ type: DELETE });
    axios
        .delete(`${URL}/api/foodbank/${id}`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};
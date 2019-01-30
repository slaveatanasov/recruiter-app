import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthToken';

export const registerNewUser = (userData, history) => dispatch => {
    axios.post('http://127.0.0.1:5000/users', userData)
    .then(res => history.push('/login'))
    // .catch(err => console.log(err.response.data));
    .catch(err => 
        dispatch({
            type: 'GET_ERRORS',
            // payload: err.response.data
            payload: "Bad request. Check all the fields again."
        })
    );
}

export const loginUser = (userData) => dispatch => {
    axios.post('http://127.0.0.1:5000/auth/login', userData)
    .then(res => {
        //Save token to localStorage.
        const token = res.data;
        //Set token to localStorage.
        localStorage.setItem('jwtToken', token);
        //Set token to Authorization header for all requests.
        setAuthToken(token);
        //Decode token to get the user data.
        const decodedToken = jwt_decode(token);
        //Set current user.
        dispatch(setCurrentUser(decodedToken));
    })
    .catch(err => {
        dispatch({
            type: 'GET_ERRORS',
            // payload: err.response.data
            payload: "Bad request. Check all the fields again."
        }) }
    );
}

//Set current/logged in user. 
export const setCurrentUser = (decodedToken) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decodedToken
    }
}

//Logout user.
export const logoutUser = () => dispatch => {
    //Remove token from localStorage.
    localStorage.removeItem('jwtToken');
    //Remove auth header for future requests (it is deleted in the if statement in setAuthToken()).
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated back to false.
    dispatch(setCurrentUser({}));
}

export const updateUser = (userData, history) => dispatch => {
    axios.put(`http://127.0.0.1:5000/users/${userData.id}`, userData)
    .then(res => {
        delete userData.password;
        dispatch(setUpdatedUser(userData));
    })
    .then(res => history.push('/dashboard'))
    // .catch(err => console.log(err.response.data));
    .catch(err => {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
    );
}

//Set updated user. 
export const setUpdatedUser = (updatedUser) => {
    return {
        type: 'SET_UPDATED_USER',
        payload: updatedUser
    }
}

export const deleteUser = (history) => dispatch => {
    if (window.confirm('Are you sure? This cannot be undone!' )) {
        axios.delete('http://127.0.0.1:5000/users')
        .then(res => {
            dispatch(setCurrentUser({}));
        })
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        });
    }
}
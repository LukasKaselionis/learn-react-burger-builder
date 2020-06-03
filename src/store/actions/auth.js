import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    let baseURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    const apiKey = 'AIzaSyAxmL5-PHGRhONKtAmfiIQHwPjffZcfzPY';
    if(!isSignUp){
        baseURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    }

    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post(baseURL + apiKey, authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
            })
            .catch(err => {
                console.log(err.response.data.error);
                dispatch(authFail(err.response.data.error));
            })
    }
}
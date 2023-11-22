import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    CLEAR_ERRORS
} from '../constants/UserConstants.js'
import axios from 'axios'


export const createUser = (formData) => async(dispatch) => {
    try{
        dispatch({ type: REGISTER_USER_REQUEST })
        let link = '/api/pn/register'

        const { data } = await axios.post(link,formData)
        // console.log(data)
        
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

export const updateUserProfile = (formData, id) => async(dispatch) => {
    try{
        dispatch({ type: UPDATE_PROFILE_REQUEST })
        let link = `/api/pn/admin/updateProfile/${id}`

        const { data } = await axios.post(link,formData)
        // console.log(data)
        
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: err.response.data.message
        })
    }
}

export const updateUserPassword = (formData, id) => async(dispatch) => {
    try{
        dispatch({ type: UPDATE_PASSWORD_REQUEST })
        let link = `/api/pn/updatePassword/${id}`

        const { data } = await axios.post(link,formData)
        // console.log(data)
        
        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loginUser = (email,password) => async(dispatch) => {
    try{
        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        let link = '/api/pn/userLogin'

        const { data } = await axios.post(link,{email,password},config)
        // console.log(data)
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    }catch(err){
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loadUser = () => async(dispatch) => {
    try{
        dispatch({ type: LOAD_USER_REQUEST })

        let link = '/api/pn/me'

        const { data } = await axios.get(link)
        // console.log(data)
        
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    }catch(err){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

// Logout User
export const logout = () => async (dispatch) => {
    try {
      await axios.get(`/api/pn/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};



// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
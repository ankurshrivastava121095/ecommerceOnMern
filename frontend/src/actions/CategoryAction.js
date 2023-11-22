import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/CategoryConstants.js'
import axios from 'axios'


export const getCategories = () => async(dispatch) => {
    try{
        dispatch({ type: ALL_CATEGORY_REQUEST })
        let link = '/api/pn/categories'

        const { data } = await axios.get(link)
        // console.log(data)
        
        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: err.response.data.message
        })
    }
}

export const getCategoryDetails = (id) => async(dispatch) => {
    try{
        dispatch({ type: CATEGORY_DETAILS_REQUEST })
        let link = `/api/pn/getCategoryDetail/${id}`

        const { data } = await axios.get(link)
        // console.log(data)
        
        dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
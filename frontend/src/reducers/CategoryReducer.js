import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/CategoryConstants.js'


export const categoriesReducer = (state={categories:[]},action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return{
                loading: true,
                categories: [],
            }
        case ALL_CATEGORY_SUCCESS:
            return{
                loading: false,
                categories: action.payload.allCategories,
            }
        case ALL_CATEGORY_FAIL:
            return{
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }
        default: return state
            
    }
}

export const categoryDetailsReducer = (state={categories:[]},action) => {
    switch (action.type) {
        case CATEGORY_DETAILS_REQUEST:
            return{
                loading: true,
                categories: [],
            }
        case CATEGORY_DETAILS_SUCCESS:
            return{
                loading: false,
                categories: action.payload.categoryDetail,
            }
        case CATEGORY_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }
        default: return state
            
    }
}
import {
ADD_STAMP_SUCCESS,  
ADD_STAMP_FAILED,  
EDIT_STAMP_SUCCESS,  
EDIT_STAMP_FAILED,  
DELETE_STAMP_SUCCESS, 
DELETE_STAMP_FAILED,  
GET_STAMP_BY_ID_SUCCESS,
GET_STAMP_BY_ID_FAILED,  
GET_STAMP_BY_OWNER_SUCCESS,
GET_STAMP_BY_OWNER_FAILED, 
STAMPS_LOADING 
} from '../actions/stamp'

function getInitinailState () {
    let stamps = []
    let error = ''
    let loading = false

    // thinking about using storage storage
    return {
        stamps, 
        error, 
        loading
    }
}

let stampDefaultStete = getInitinailState()

const stampReducer = ( state = stampDefaultStete, action) => {
    
    let tempState = {}
    switch (action.type) {
        case ADD_STAMP_SUCCESS : 
            tempState = {
                ...state, 
                error : '', 
                loading : false
            }
            return tempState            
        case ADD_STAMP_FAILED:
             tempState = {
                ...state,
                error : action.error, 
                loading : false
            }
            return tempState
        case EDIT_STAMP_SUCCESS:  
            tempState = {
                ...state, 
                error : '', 
                loading : false
            }
            return tempState
        case EDIT_STAMP_FAILED:  
        tempState = {
            ...state, 
            error : action.error, 
            loading : false
        }
        return tempState
        case DELETE_STAMP_SUCCESS: 
            tempState = {
                ...state, 
                error : '', 
                loading : false
            }
            return tempState
        case DELETE_STAMP_FAILED:  
            tempState = {
                ...state, 
                error : action.error, 
                loading : false
            }
            return tempState
        case GET_STAMP_BY_ID_SUCCESS:
        case STAMPS_LOADING : 
        tempState = {
            ...state, 
            loading : true
        }
        return tempState
        case GET_STAMP_BY_ID_FAILED:
        case GET_STAMP_BY_OWNER_SUCCESS: 
            tempState = {
                stamps : action.stamps, 
                error : '', 
                loading : false 
            }
            return tempState
        case GET_STAMP_BY_OWNER_FAILED:
        default : 
            return state
    }
}

export default stampReducer
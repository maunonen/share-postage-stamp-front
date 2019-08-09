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
GET_STAMP_BY_OWNER_FAILED 
} from '../actions/stamp'

function getInitinailState () {
    let stamps = []
    let error = ''

    // thinking about using storage storage
    return {
        stamps, 
        error
    }
}

let stampDefaultStete = getInitinailState()

const stampReducer = ( state = stampDefaultStete, action) => {
    
    let tempState = {}
    switch (action.type) {
        case ADD_STAMP_SUCCESS : 
            tempState = {
                ...state, error : ''
            }
            return tempState            
        case ADD_STAMP_FAILED:
             tempState = {
                ...state,
                error : action.error
            }
            return tempState
        case EDIT_STAMP_SUCCESS:  
            return 1
        case EDIT_STAMP_FAILED:  
            return 1
        case DELETE_STAMP_SUCCESS: 
            tempState = {
                ...state, 
                error : ''
            }
            return tempState
        case DELETE_STAMP_FAILED:  
            tempState = {
                ...state, 
                error : action.error
            }
            return tempState
        case GET_STAMP_BY_ID_SUCCESS:
        case GET_STAMP_BY_ID_FAILED:
        case GET_STAMP_BY_OWNER_SUCCESS: 
            tempState = {
                stamps : action.stamps, 
                error : '' 
            }
            return tempState
        case GET_STAMP_BY_OWNER_FAILED:
        default : 
            return state
    }
}

export default stampReducer
import {
    ADD_ORDER_SUCCESS, 
    ADD_ORDER_FAILED, 
    EDIT_ORDER_SUCCESS, 
    EDIT_ORDER_FAILED, 
    DELETE_ORDER_SUCCESS, 
    DELETE_ORDER_FAILED, 
    GET_ORDER_BY_OWNER_SUCCESS, 
    GET_ORDER_BY_OWNER_FAILED, 
    GET_ORDER_BY_OWNER_EMPTY, 
    ORDER_LOADING, 
    
} from '../actions/order'

function getInitialStates () {
    let orders = []
    let error = ''
    let loading = false 
   return {
        orders, error, loading        
   } 
}
let orderDefaultState = getInitialStates()

const orderReducer = ( state = orderDefaultState ,action ) => {
    let tempState = {}
    switch (action.type){
        case ADD_ORDER_SUCCESS : 
            tempState =  {
                ...state, 
                error : '', 
                loading : false
            }
            return tempState
        case ADD_ORDER_FAILED : 
            tempState = {
                ...state, 
                error : action.error, 
                loading : false
            }
            return tempState
        case EDIT_ORDER_SUCCESS : 
            tempState = {
                ...state ,
                error : '', 
                loading : false
            }
            return tempState
        case EDIT_ORDER_FAILED : 
            tempState = {
                ...state, 
                error : action.error, 
                loading : false
            }
            return tempState
        case DELETE_ORDER_SUCCESS : 
            tempState = {
                ...state, 
                error : '', 
                loading : false
            }
            return tempState
        case DELETE_ORDER_FAILED: 
            tempState = {
                ...state, 
                error : action.error, 
                loading : false
            }
            return tempState
        case GET_ORDER_BY_OWNER_SUCCESS: 
            tempState = {
                orders : action.orders, 
                error : '', 
                loading : false
            }
            return tempState
        case GET_ORDER_BY_OWNER_FAILED: 
            tempState = {
                ...state,
                error : action.error, 
                loading : false 
            }    
            return tempState
        case GET_ORDER_BY_OWNER_EMPTY : 
            tempState = {
                orders : [], 
                error : action.error, 
                loading : false
            }
        return tempState
        case ORDER_LOADING: 
            tempState = {
                ...state, 
                loading : true
            }
        return tempState
        default : 
            return state
    } 
}
export default orderReducer
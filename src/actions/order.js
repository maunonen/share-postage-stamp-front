import axios from '../config/axios'
import {push} from 'connected-react-router'
//import { axios} from '../config/axios'

export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS'
export const ADD_ORDER_FAILED = 'ADD_ORDER_FAILED'

export const EDIT_ORDER_SUCCESS = 'EDIT_ORDER_SUCCESS'
export const EDIT_ORDER_FAILED = 'EDIT_ORDER_FAILED'

export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS'
export const DELETE_ORDER_FAILED = 'DELETE_ORDER_FAILED'

export const GET_ORDER_BY_OWNER_SUCCESS = 'GET_ORDER_BY_OWNER_SUCCESS'
export const GET_ORDER_BY_OWNER_FAILED = 'GET_ORDER_BY_OWNER_FAILED'
export const GET_ORDER_BY_OWNER_EMPTY = 'GET_ORDER_BY_OWNER_EMPTY'

export const ORDER_LOADING = 'ORDER_LOADING'


export const removeOrder = (id )  => {

    return dispatch => {
        dispatch(orderLoading()) 
        axios.delete('/orders/' + id).then(res => {
            dispatch(deleteOrderSuccess())
            dispatch(getOrderByOwner())
        }).catch(( error) => {
            //console.log('')
            //console.log('STATUS', error.response.status)
            //console.log('STATUS ERROR', error.response.data)

            if ( error.response.status === 401){ 
                dispatch(deleteOrderFailed('Please provide password and username')) 
            } else if (error.response.status === 404){
                    dispatch(deleteOrderFailed('Order not found or you don\'t have permission.'))
            } else if (error.response.status === 400 ) {
                dispatch(deleteOrderFailed(''))
            } else if ( error.request){
                dispatch(deleteOrderFailed('Server not responce'))
            } 
            else {
                dispatch(deleteOrderFailed(`Status: ${ error.response.status}. Message:${ error.response.data }`))
            }
        })
    }

}


export const getOrderByOwner = ()  => {
    return dispatch  => {
        const ownerID='5cd34166b4588252bd0ea8d1'
        dispatch(orderLoading())
        axios.get('/orders/outbound').then( res => {
            dispatch(getOrderByOwnerSuccess(res.data))
        }).catch((error) => {
            //console.log('ERROR STATUS ORDER', error.response.status)
            if (error.response) {
                if ( error.response.status === 401){
                    dispatch( getOrderByOwnerFailed('Please provide password and username'))
                    // redirect to login page 
                } else if ( error.response.status === 404) {
                    dispatch(getOrderByOwnerEmpty(` ${ error.response.status} ordres not found`))
                } else {
                    dispatch(getOrderByOwnerFailed(`${ error.response.data} ${ error.response.status}`))
                }
            } else if ( error.request) {
                dispatch(getOrderByOwnerFailed(`Server did't responce`))
            }
        })
    }
}


export const addOrder  = () => ({
    type : 'ADD_ORDER'
})

const addOrderSuccess = ( orders) =>  {
    return {
        type : ADD_ORDER_SUCCESS, 
        orders
    }
}

const addOrderFailed = (error )=> {
    return {
        type : ADD_ORDER_FAILED, 
        error
    }
}

const editOrderSuccess = () => {
    return {
        type : EDIT_ORDER_SUCCESS
    }
}

const editOrderFailed = (error) => {
    return {
        type : EDIT_ORDER_FAILED, 
        error
    }
}

const deleteOrderSuccess = () => {
    return  {
        type : DELETE_ORDER_SUCCESS
    }
}
const deleteOrderFailed = (error) => {
    return {
        type : DELETE_ORDER_FAILED, 
        error
    }
}

const getOrderByOwnerSuccess = (orders ) => {
    return {
        type : GET_ORDER_BY_OWNER_SUCCESS, 
        orders
    }
}
const getOrderByOwnerFailed = (error) => {
    return {
        type : GET_ORDER_BY_OWNER_FAILED, 
        error
    }
}
const getOrderByOwnerEmpty = (error) => {
    return {
        type : GET_ORDER_BY_OWNER_EMPTY, 
        error
    }    
}

const orderLoading = () => {
    return {
        type : ORDER_LOADING
    }
}
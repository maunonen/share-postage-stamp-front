import axios from '../config/axios'
import { push } from 'connected-react-router'

// ACTION CONSTANT
export const ADD_STAMP_SUCCESS = "ADD_STAMP_SUCCESS"
export const ADD_STAMP_FAILED = "ADD_STAMP_FAILED"
export const EDIT_STAMP_SUCCESS = "EDIT_STAMP_SUCCESS";
export const EDIT_STAMP_FAILED = "EDIT_STAMP_FAILED";
export const DELETE_STAMP_SUCCESS = "DELETE_STAMP_SUCCESS";
export const DELETE_STAMP_FAILED = "DELETE_STAMP_FAILED";
export const GET_STAMP_BY_ID_SUCCESS = "GET_STAMP_BY_ID_SUCCESS"
export const GET_STAMP_BY_ID_FAILED = "GET_STAMP_BY_ID_FAILED"
export const GET_STAMP_BY_OWNER_SUCCESS = "GET_STAMP_BY_OWNER_SUCCESS"
export const GET_STAMP_BY_OWNER_FAILED = "GET_STAMP_BY_OWNER_FAILED"
export const STAMPS_LOADING = "STAMPS_LOADING"

 
// get individual stamp by id 

export const getStampByID = ( id = {}) => {
    const stampID = '5d4abf6ab3e080c4aa99f623'
    return dispatch =>  {
        dispatch(getStampByIDSuccess())
    }
}

export const getStampByOwner = () => {
    return dispatch =>  {
        const ownerID='5cd34166b4588252bd0ea8d1'
        dispatch(stampsLoading())
        axios.get('/stamps/?owner=' + ownerID).then( res => {
            dispatch(getStampByOwnerSuccess(res.data))
        }).catch( error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                dispatch( getStampByOwnerFailed( `${ error.response.data}. STATUS ${error.response.status}` ))
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                dispatch( getStampByOwnerFailed('No responce was received from server'))                 
              } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error', error.response.data);
                dispatch( getStampByOwnerFailed('Where is some error in setting up the request')) 
              }
        }) 
    }
}

// addStamp

export const addStamp = ( stamp = {}) => {
    
    return dispatch => {          
        dispatch(stampsLoading())
        axios.post('/stamps', stamp).then( res => {
            dispatch(addStampSuccess())
            dispatch(getStampByOwner())
            dispatch( push('/'))
        }).catch( (error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                dispatch( addStampFailed(`${ error.response.data}. STATUS ${error.response.status}`)) 
                console.log('ADD ERROR BEFORE GET STAMP')
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                dispatch( addStampFailed('No responce was received from server'))                 
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch( addStampFailed('Where is some error in setting up the request')) 
              }
        })
        
    }
}

// editStamp 
 export const editStamp = ( id, stamp = {}) => {
    return dispatch => {   
        dispatch(stampsLoading())
        axios.patch('/stamps/' + id, stamp).then( res => {
            dispatch(editStampSuccess())
            dispatch(getStampByOwner())
            dispatch( push('/'))
        }).catch( (error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('EDIT STAMP ACTION ERROR 1', error.response.data.error)        
                dispatch(editStampFailed(`${ error.response.data.error}. STATUS ${error.response.status}`)) 
                
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log('EDIT STAMP ACTION ERROR 2', error.response.data.error)      
                dispatch( editStampFailed('No responce was received from server'))                 
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('EDIT STAMP ACTION ERROR 3', error)        
                dispatch( editStampFailed('Where is some error in setting up the request')) 
              }
        })
        
    }
 }
// remove stamp
export const removeStamp  = ( id ) => {
    return dispatch => {
        dispatch(stampsLoading())
        axios.delete('/stamps/' + id).then( res => {
            dispatch(deleteStampSuccess())
            dispatch(getStampByOwner())
        }).catch( (error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                dispatch( deleteStampFailed(`${ error.response.data}. STATUS ${error.response.status}`)) 
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                dispatch( deleteStampFailed('No responce was received from server'))                 
              } else {
                // Something happened in setting up the request that triggered an Error
                dispatch( deleteStampFailed('Where is some error in setting up the request')) 
              }
        })
    }
}
// get stamps list 

// action creator 
export const addStampSuccess = () => {
    return {
        type : ADD_STAMP_SUCCESS, 
        error : ''
    }
}
const addStampFailed = (error) => {
    return {
        type : ADD_STAMP_FAILED, 
        error : error
    }
}
const editStampSuccess = () => {
    return {
        type : EDIT_STAMP_SUCCESS 
        //error : ''
    }
}
const editStampFailed = (error) => {
    return {
        type : EDIT_STAMP_FAILED, 
        error
    }
}
const deleteStampSuccess = () => {
    return {
        type : DELETE_STAMP_SUCCESS
    }
}
const deleteStampFailed = (error) => {
    return {
        type : DELETE_STAMP_FAILED, 
        error 
    }
}
const getStampByIDSuccess = (id)=> {
    return {
        type : GET_STAMP_BY_ID_SUCCESS, 
        id
    }
}
const getStampByIDFailed = (error) => {
    return {
        type : GET_STAMP_BY_ID_FAILED, 
        error
    }
}
const getStampByOwnerSuccess = (stamps) => {
    return {
        type : GET_STAMP_BY_OWNER_SUCCESS, 
        stamps
    }
}
const getStampByOwnerFailed = (error)=> {
    return {
        type : GET_STAMP_BY_OWNER_FAILED, 
        error
    }
}

const stampsLoading = () => {
    return {
        type : STAMPS_LOADING
    }
}
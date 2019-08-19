import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import stampReducer from './stamp'
import orderReducer from './order'
import shipmentReducer from './shipment'
import userReducer from './user'



const rootReducer = (history) => combineReducers({
        router: connectRouter(history), 
        stamps : stampReducer, 
        orders : orderReducer, 
        shipments : shipmentReducer, 
        user : userReducer,  
        
    })

    export default rootReducer

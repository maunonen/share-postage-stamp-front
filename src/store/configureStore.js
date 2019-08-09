import { createStore, combineReducers, applyMiddleware} from 'redux'

import stampReducer from '../reducers/stamp'
import orderReducer from '../reducers/order'
import shipmentReducer from '../reducers/shipment'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



export default () => {
    const store = createStore (
        combineReducers ({
            stamps : stampReducer, 
            orders : orderReducer, 
            shipments : shipmentReducer, 
            user : userReducer
        }), composeWithDevTools(
            applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
        return store 
}
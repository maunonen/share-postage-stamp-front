import { createStore, combineReducers} from 'redux'

import stampReducer from '../reducers/stamp'
import orderReducer from '../reducers/order'
import shipmentReducer from '../reducers/shipment'

export default () => {
    const store = createStore (
        combineReducers ({
            stamp : stampReducer, 
            order : orderReducer, 
            shipment : shipmentReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
        return store 
}
import { createStore, combineReducers} from 'redux'

import stampReducer from '../reducers/stamp'

export default () => {
    const store = createStore (
        combineReducers ({
            stamp : stampReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
        return store 
}
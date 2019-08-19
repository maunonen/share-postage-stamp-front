import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
// allows reducers access router
import { routerMiddleware } from 'connected-react-router'
//import rootReducer from './modules'
import createRootReducer from '../reducers/'

export const history = createBrowserHistory()

const reactRouterMiddleware = routerMiddleware(history); 

const middleWares = [
    thunk, 
    reactRouterMiddleware
]
console.log('HISTORY CONFIGURE STORE', history)
export default function configureStore (){
    const store = createStore ( 
        createRootReducer(history)
        , composeWithDevTools(
            applyMiddleware(...middleWares))
        ) 
        return store 
}
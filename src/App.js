import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter'
import { Provider} from 'react-redux'
import configureStore,{history} from './store/configureStore'
import {addStamp } from './actions/stamp'
import { ConnectedRouter } from 'connected-react-router'


const store = configureStore()
console.log('STORE', )
console.log('HISTORY APP COMPONENT', history)
const App = () => (
  <div className="App">
    <Provider store={store}>
      <ConnectedRouter history={history}> 
          <AppRouter/>
      </ConnectedRouter>  
    </Provider>
  </div>
)

export default  App

